import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const vpquestionModel = new Schema({
  
    vquestions: { type : Array, default: []},
    vanswers: {type:Array,default:[]},
    yesQuestionIndex: {type:Array,default:[]},
    noQuestionIndex: {type:Array,default:[]},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('vpQuestion', vpquestionModel);