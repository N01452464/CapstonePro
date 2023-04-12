import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import questionRoute from './router/que.js';
import bodyParser from 'body-parser';
import hbs from 'hbs';
import Handlebars from 'handlebars';
import expressHandlebars from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import path from 'path';
import * as configValues from './config.js';
const app = express();
const __dirname = path.resolve();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** application port */
const port = process.env.PORT || 8080;
mongoose.set("strictQuery", false);

// Define your admin user credentials
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'password123';

// Route to display the login form
app.get('/', (req, res) => {
  res.render('login');
});

// Route to handle the login form submission
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if the provided credentials match the admin user
  if (email !== ADMIN_EMAIL || !await bcrypt.compare(password, await bcrypt.hash(ADMIN_PASSWORD, 10))) {
    return res.status(401).render('login', { error: 'Invalid email or password' });
  }

  // Generate a JWT token for the authenticated admin user
  const accessToken = jwt.sign({ email }, configValues.secret || 'default_secret_key');

  // Set the token as a cookie
  res.cookie('token', accessToken);

  // Redirect the user to the dashboard page
  res.render('dashboard');
});

// Middleware to authenticate the user with a valid JWT token
const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/');
  }

  try {
    const accessToken = configValues.secret || 'default_secret_key';
    console.log(accessToken);
    const { email } = jwt.verify(token, accessToken);
    req.user = email;
    next();
  } catch (err) {
    res.redirect('/');
  }
};

app.use('/api', router); /** apis */
app.use('/api/v1/que', questionRoute);

app.get('/', (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log('Cannot connect to the server');
    }
  
})