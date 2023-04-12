import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const oaresultModel = new Schema({
    email : { type : String },
    oaquestions: { type : String, default: []},
    oaresult:{type:Array,default:[]},
    oaattempts:{type:Number,default:0},
    oabusinessfeasibilitysummary : { type : String},
    oabusinessfeasibilitypoints : { type : Number},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('oaResult', oaresultModel);