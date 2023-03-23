import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';
import connect from './database/conn.js';
import  questionRoute from './router/que.js'
import bodyParser from 'body-parser';
import hbs from 'hbs';
import Handlebars from 'handlebars';
import expressHandlebars from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

var app = express();
import path from 'path';
const __dirname = path.resolve();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json





/** app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();


/** appliation port */
const port = process.env.PORT || 8080;
mongoose.set("strictQuery",false);


app.use('/api', router) /** apis */
app.use('/api/v1/que',questionRoute);


app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})