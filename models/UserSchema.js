import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;
import dotenv from 'dotenv';
dotenv.config();

//schema for restaurant
const UserSchema = new Schema({
    email : { type : String },
    password:{type: String},
});
export default mongoose.model('User', UserSchema);