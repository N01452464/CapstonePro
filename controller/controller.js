import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import maResults from "../models/maresultSchema.js";
import noResults from "../models/noresultSchema.js";
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

export async function search(req, res,next) {
    res.render('search', { layout: false });
}
export async function masearch(req, res,next) {
    res.render('search1', { layout: false });
}
export async function oasearch(req, res,next) {
    res.render('search2', { layout: false });
}
export async function vpsearch(req, res,next) {
    res.render('search3', { layout: false });
}
export async function mpsearch(req, res,next) {
    res.render('search4', { layout: false });
}
export async function nosearch(req, res,next) {
    res.render('search5', { layout: false });
}


export async function delsearch(req, res,next) {
    const questionData = await Questions.find();
  
    res.render('delete', {data:questionData, layout: false });
}
export async function updsearch(req, res,next) {
    res.render('update', { layout: false });
}
export async function delmasearch(req, res,next) {
    const maquestionData = await maQuestions.find();
  
    res.render('delete1', {data:maquestionData, layout: false });
    
}
export async function updmasearch(req, res,next) {
    res.render('update1', { layout: false });
}
export async function delmpsearch(req, res,next) {
    const mpquestionData = await mpQuestions.find();
  
    res.render('delete4', {data:mpquestionData, layout: false });
    
}
export async function updmpsearch(req, res,next) {
    res.render('update4', { layout: false });
}
export async function deloasearch(req, res,next) {
    const oaquestionData = await oaQuestions.find();
  
    res.render('delete2', {data:oaquestionData, layout: false });
}
export async function updoasearch(req, res,next) {
    res.render('update2', { layout: false });
}
export async function delvpsearch(req, res,next) {
    const vpquestionData = await vpQuestions.find();
  
    res.render('delete3', {data:vpquestionData, layout: false });
}
export async function updvpsearch(req, res,next) {
    res.render('update3', { layout: false });
}

export async function dashboard(req,res,next){
    res.render('dashboard',{layout:false});
}
export async function logout(req,res,next){
    res.render('logout',{layout:false});
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
  export async function addmasearch(req, res, next) {
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
      await maQuestions.updateOne({
        $push: {
         mquestions: {
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
      const maquestionData = await maQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render('display1', { data: maquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function addvpsearch(req, res, next) {
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
      await vpQuestions.updateOne({
        $push: {
         vquestions: {
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
      const vpquestionData = await vpQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render('display3', { data: vpquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function addoasearch(req, res, next) {
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
      await oaQuestions.updateOne({
        $push: {
         oquestions: {
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
      const oaquestionData = await oaQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render('display2', { data: oaquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function addmpsearch(req, res, next) {
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
      await mpQuestions.updateOne({
        $push: {
         mpquestions: {
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
      const mpquestionData = await mpQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render('display4', { data: mpquestionData, layout: false });
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
  export async function updatemaSearch(req, res, next) {
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
      await maQuestions.updateOne(
        { "mquestions.question_id": qi },
        {
          $set: {
            "mquestions.$.question": q,
            "mquestions.$.options": [o1, o2],
            "mquestions.$.Answer_type": at,
            "mquestions.$.yesQuestionIndex": yqi,
            "mquestions.$.noQuestionIndex": nqi,
            "mquestions.$.category_type": ct,
          },
        }
      );
  
      // Retrieve all question data from the database
      const mquestionData = await maQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render("display1", { data: mquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function updatempSearch(req, res, next) {
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
      await mpQuestions.updateOne(
        { "mpquestions.question_id": qi },
        {
          $set: {
            "mpquestions.$.question": q,
            "mpquestions.$.options": [o1, o2],
            "mpquestions.$.Answer_type": at,
            "mpquestions.$.yesQuestionIndex": yqi,
            "mpquestions.$.noQuestionIndex": nqi,
            "mpquestions.$.category_type": ct,
          },
        }
      );
  
      // Retrieve all question data from the database
      const mpquestionData = await mpQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render("display4", { data: mpquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function updatevpSearch(req, res, next) {
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
      await vpQuestions.updateOne(
        { "vquestions.question_id": qi },
        {
          $set: {
            "vquestions.$.question": q,
            "vquestions.$.options": [o1, o2],
            "vquestions.$.Answer_type": at,
            "vquestions.$.yesQuestionIndex": yqi,
            "vquestions.$.noQuestionIndex": nqi,
            "vquestions.$.category_type": ct,
          },
        }
      );
  
      // Retrieve all question data from the database
      const vquestionData = await vpQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render("display3", { data: vquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function updateoaSearch(req, res, next) {
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
      await oaQuestions.updateOne(
        { "oquestions.question_id": qi },
        {
          $set: {
            "oquestions.$.question": q,
            "oquestions.$.options": [o1, o2],
            "oquestions.$.Answer_type": at,
            "oquestions.$.yesQuestionIndex": yqi,
            "oquestions.$.noQuestionIndex": nqi,
            "oquestions.$.category_type": ct,
          },
        }
      );
  
      // Retrieve all question data from the database
      const oquestionData = await oaQuestions.find();
  
      // Render the question data in a table format using the display.hbs file
      return res.render("display2", { data: oquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  
    export async function deletesearch(req, res, next) {
    try {
      const qi = req.body.question_id;
    console.log(qi);
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
  export async function deletemasearch(req, res, next) {
    try {
      const qi = req.body.question_id;
  
      // Delete the question with the given question_id from the database
      await maQuestions.updateOne(
        {},
        { $pull: { mquestions: { question_id: qi } } }
      );
  
      // Retrieve all question data from the database
      const maquestionData = await maQuestions.find();
      // Render the question data in a table format using the display.hbs file
      return res.render('display1', { data: maquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  export async function deletempsearch(req, res, next) {
    try {
      const qi = req.body.question_id;
  
      // Delete the question with the given question_id from the database
      await mpQuestions.updateOne(
        {},
        { $pull: { mpquestions: { question_id: qi } } }
      );
  
      // Retrieve all question data from the database
      const mpquestionData = await mpQuestions.find();
      // Render the question data in a table format using the display.hbs file
      return res.render('display4', { data: mpquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  
  export async function deletevpsearch(req, res, next) {
    try {
      const qi = req.body.question_id;
  
      // Delete the question with the given question_id from the database
      await vpQuestions.updateOne(
        {},
        { $pull: { vquestions: { question_id: qi } } }
      );
  
      // Retrieve all question data from the database
      const vpquestionData = await vpQuestions.find();
      // Render the question data in a table format using the display.hbs file
      return res.render('display3', { data: vpquestionData, layout: false });
    } catch (err) {
      return next(err);
    }
  }
  
  export async function deleteoasearch(req, res, next) {
    try {
      const qi = req.body.question_id;
  
      // Delete the question with the given question_id from the database
      await oaQuestions.updateOne(
        {},
        { $pull: { oquestions: { question_id: qi } } }
      );
  
      // Retrieve all question data from the database
      const oaquestionData = await oaQuestions.find();
      // Render the question data in a table format using the display.hbs file
      return res.render('display2', { data: oaquestionData, layout: false });
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
export async function getnoResult(req, res){
    try {
        const r = await noResults.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}
export async function storenoResult(req, res){
    try {
        const { email,noquestions,noresult,noattempts,nobusinessfeasibilitysummary,nobusinessfeasibilitypoints } = req.body;
        if(!email) throw new Error('Data Not Provided...!');

        noResults.create({ email,noquestions,noresult,noattempts,nobusinessfeasibilitysummary,nobusinessfeasibilitypoints}, function(err, data){
            res.json({ msg : "Result Saved Successfully...!"})
            console.log(nobusinessfeasibilitysummary);
        })

   } catch (error) {
        res.json({error})
   }
}
export async function dropnoResult(req, res){
    try {
        await noResults.deleteMany();
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
            console.log(mpbusinessfeasibilitysummary);
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
