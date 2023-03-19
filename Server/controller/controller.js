import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import maResults from "../models/maresultSchema.js";
import mpResults from "../models/mpresultSchema.js";
import oaResults from "../models/oaresultSchema.js";
import questions,{answers} from'../database/data.js';
import NoQuestions from "../models/noquestionSchema.js";
import questionn,{answerss} from'../database/data1.js';
import mquestions,{manswers} from'../database/mk.js';
import mpquestions,{mpanswers} from'../database/mp.js';
import oquestions,{oanswers} from'../database/oa.js';
import maQuestions from "../models/maSchema.js";
import oaQuestions from "../models/oaSchema.js";
import mpQuestions from "../models/mpSchema.js";
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions,answers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
export async function getmaQuestions(req, res){
    try {
        const q = await maQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export async function insertmaQuestions(req, res){
    try {
        maQuestions.insertMany({ mquestions,manswers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropmaQuestions(req, res){
    try {
        await maQuestions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
export async function getoaQuestions(req, res){
    try {
        const q = await oaQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export async function insertoaQuestions(req, res){
    try {
        oaQuestions.insertMany({ oquestions,oanswers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropoaQuestions(req, res){
    try {
        await oaQuestions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
export async function getmpQuestions(req, res){
    try {
        const q = await mpQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export async function insertmpQuestions(req, res){
    try {
        mpQuestions.insertMany({ mpquestions,mpanswers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropmpQuestions(req, res){
    try {
        await mpQuestions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storeResult(req, res){
    try {
        const { email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        Results.create({ email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            console.log(businessfeasibilitysummary);
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}
export async function getNoQuestions(req, res){
    try {
        const q = await NoQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export async function insertNoQuestions(req, res){
    try {
        NoQuestions.insertMany({ questionn,answerss}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropNoQuestions(req, res){
    try {
        await NoQuestions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}
export async function getmaResult(req, res){
    try {
        const r = await maResults.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storemaResult(req, res){
    try {
        const { email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        maResults.create({ email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            console.log(businessfeasibilitysummary);
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropmaResult(req, res){
    try {
        await maResults.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}
export async function getmpResult(req, res){
    try {
        const r = await mpResults.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storempResult(req, res){
    try {
        const { email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        mpResults.create({ email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            console.log(businessfeasibilitysummary);
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropmpResult(req, res){
    try {
        await mpResults.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}
export async function getoaResult(req, res){
    try {
        const r = await oaResults.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storeoaResult(req, res){
    try {
        const { email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        oaResults.create({ email,questions,result,attempts,businessfeasibilitysummary,businessfeasibilitypoints}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            console.log(businessfeasibilitysummary);
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropoaResult(req, res){
    try {
        await oaResults.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}
