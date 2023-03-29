import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import maResults from "../models/maresultSchema.js";
import mpResults from "../models/mpresultSchema.js";
import oaResults from "../models/oaresultSchema.js";
import vpResults from "../models/vpresultSchema.js";
import questions,{answers} from'../database/data.js';
import NoQuestions from "../models/noquestionSchema.js";
import questionn,{answerss} from'../database/data1.js';
import mquestions,{manswers} from'../database/mk.js';
import mpquestions,{mpanswers} from'../database/mp.js';
import vquestions,{vanswers} from'../database/vp.js';
import oquestions,{oanswers} from'../database/oa.js';
import maQuestions from "../models/maSchema.js";
import oaQuestions from "../models/oaSchema.js";
import mpQuestions from "../models/mpSchema.js";
import vpQuestions from "../models/vpSchema.js";
import User from "../models/UserSchema.js";
 // pull information from HTML POST (express4)
 import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Import middleware to verify JWT token
export async function login(req, res) {
    const e = req.body.email
    const user = {email : e}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
	res.json({ accessToken : accessToken})
}
export async function search(req, res,next) {
    res.render('search', { layout: false });
}
export async function delsearch(req, res,next) {
    res.render('delete', { layout: false });
}
export async function updsearch(req, res,next) {
    res.render('update', { layout: false });
}


export async function addsearch(req, res, next) {
    try {
      const qi = req.body.QuestionID;
      const q = req.body.Question;
      const o1 = req.body.Options;
      const o2 = req.body.Options1;
      const at = req.body.At;
      const yqi = req.body.Yqi;
      const nqi = req.body.Nqi;
      const ct = req.body.ct;
  
      // Insert new question data into the database
      await Questions.updateOne({
        $push: {
          questions: {
            question_id: qi,
            question: q,
            options: [o1, o2],
            Answer_type: at,
            yesQuestionIndex: yqi,
            noQuestionIndex: nqi,
            category_type: ct
          }
        }
      });
  
      // Retrieve all question data from the database
      const questionData = await Questions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render('display', { data: questionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function updateSearch(req, res, next) {
    try {
      const qi = req.body.QuestionID;
      const q = req.body.Question;
      const o1 = req.body.Options;
      const o2 = req.body.Options1;
      const at = req.body.At;
      const yqi = req.body.Yqi;
      const nqi = req.body.Nqi;
      const ct = req.body.ct;
  
      // Update the question data in the database based on the given question_id
      await Questions.updateOne(
        { "questions.question_id": qi },
        {
          $set: {
            "questions.$.question": q,
            "questions.$.options": [o1, o2],
            "questions.$.Answer_type": at,
            "questions.$.yesQuestionIndex": yqi,
            "questions.$.noQuestionIndex": nqi,
            "questions.$.category_type": ct,
          },
        }
      );
  
      // Retrieve all question data from the database
      const questionData = await Questions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render("display", { data: questionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
    export async function deletesearch(req, res, next) {
    try {
      const qi = req.body.QuestionID;
  
      // Delete the question with the given question_id from the database
      await Questions.updateOne(
        {},
        { $pull: { questions: { question_id: qi } } }
      );
  
      // Retrieve all question data from the database
      const questionData = await Questions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render('display', { data: questionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  

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
export async function getvpQuestions(req, res){
    try {
        const q = await vpQuestions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}
export async function insertvpQuestions(req, res){
    try {
        vpQuestions.insertMany({ vquestions,vanswers}, function(err, data){
            res.json({ msg: "Data Saved Successfully...!"})
        })
    } catch (error) {
        res.json({ error })
    }
}
export async function dropvpQuestions(req, res){
    try {
        await vpQuestions.deleteMany();
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
        const { email,maquestions,maresult,maattempts,mabusinessfeasibilitysummary,mabusinessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        maResults.create({ email,maquestions,maresult,maattempts,mabusinessfeasibilitysummary,mabusinessfeasibilitypoints}, function(err, data){
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
export async function getvpResult(req, res){
    try {
        const r = await vpResults.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storevpResult(req, res){
    try {
        const { email,vpquestions,vpresult,vpattempts,vpbusinessfeasibilitysummary,vpbusinessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        vpResults.create({ email,vpquestions,vpresult,vpattempts,vpbusinessfeasibilitysummary,vpbusinessfeasibilitypoints}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropvpResult(req, res){
    try {
        await vpResults.deleteMany();
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
        const { email,mpquestions,mpresult,mpattempts,mpbusinessfeasibilitysummary,mpbusinessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        mpResults.create({ email,mpquestions,mpresult,mpattempts,mpbusinessfeasibilitysummary,mpbusinessfeasibilitypoints}, function(err, data){
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
        const { email,oaquestions,oaresult,oaattempts,oabusinessfeasibilitysummary,oabusinessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        oaResults.create({ email,oaquestions,oaresult,oaattempts,oabusinessfeasibilitysummary,oabusinessfeasibilitypoints}, function(err, data){
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
