import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
  
    questions: { type : Array, default: []},
    Answer: {type:Array,default:[]},
   
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);