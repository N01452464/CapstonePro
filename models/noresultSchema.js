import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const noresultModel = new Schema({
    email : { type : String },
    noquestions: { type : String, default: []},
    noresult:{type:Array,default:[]},
    noattempts:{type:Number,default:0},
    nobusinessfeasibilitysummary : { type : String},
    nobusinessfeasibilitypoints : { type : Number},
    createdAt : { type : Date, default : Date.now}
})

export default mongoose.model('noResult', noresultModel);