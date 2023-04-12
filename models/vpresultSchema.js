import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const vpresultModel = new Schema({
    email : { type : String },
    vpquestions: { type : String, default: []},
    vpresult:{type:Array,default:[]},
    vpattempts:{type:Number,default:0},
    vpbusinessfeasibilitysummary : { type : String},
    vpbusinessfeasibilitypoints : { type : Number},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('vpResult', vpresultModel);