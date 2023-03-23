import { text } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const oaquestionModel = new Schema({
  
    oquestions: { type : Array, default: []},
    oanswers: {type:Array,default:[]},
    yesQuestionIndex: {type:Array,default:[]},
    noQuestionIndex: {type:Array,default:[]},
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('oaQuestion', oaquestionModel);