import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
    question_id:{type:Array,default:[]},
    questions: { type : Array, default: []},
    Answer: {type:String},
    Answer_type:{type:String},
    category_type:{type:String}, 
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Question', questionModel);