import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const mpresultModel = new Schema({
    email : { type : String },
    mpquestions: { type : String, default: []},
    mpresult:{type:Array,default:[]},
    mpattempts:{type:Number,default:0},
    mpbusinessfeasibilitysummary : { type : String},
    mpbusinessfeasibilitypoints : { type : Number},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('mpResult', mpresultModel);