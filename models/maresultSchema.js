import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const maresultModel = new Schema({
    email : { type : String },
    maquestions: { type : String, default: []},
    maresult:{type:Array,default:[]},
    maattempts:{type:Number,default:0},
    mabusinessfeasibilitysummary : { type : String},
    mabusinessfeasibilitypoints : { type : Number},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('maResult', maresultModel);