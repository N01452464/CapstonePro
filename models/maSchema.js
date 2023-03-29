import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const maquestionModel = new Schema({
  
    mquestions: { type : Array, default: []},
    manswers: {type:Array,default:[]},
    yesQuestionIndex: {type:Array,default:[]},
    noQuestionIndex: {type:Array,default:[]},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('maQuestion', maquestionModel);