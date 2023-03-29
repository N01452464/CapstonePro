import { Router } from "express";
const router = Router();

import * as controller from '../controller/controller.js';

router.get('/questions',controller.getQuestions)
router.post('/questions',controller.insertQuestions)

router.route('/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

        
router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

router.route('/noquestions')
        .get(controller.getNoQuestions) /** GET Request */
        .post(controller.insertNoQuestions) /** POST Request */
        .delete(controller.dropNoQuestions) /** DELETE Request */

router.route('/oaquestions')
        .get(controller.getoaQuestions) /** GET Request */
        .post(controller.insertoaQuestions) /** POST Request */
        .delete(controller.dropoaQuestions) /** DELETE Request */

router.route('/mpquestions')
        .get(controller.getmpQuestions) /** GET Request */
        .post(controller.insertmpQuestions) /** POST Request */
        .delete(controller.dropmpQuestions) /** DELETE Request */
router.route('/vpquestions')
        .get(controller.getvpQuestions) /** GET Request */
        .post(controller.insertvpQuestions) /** POST Request */
        .delete(controller.dropvpQuestions) /** DELETE Request */

router.route('/maresult')
        .get(controller.getmaResult)
        .post(controller.storemaResult)
        .delete(controller.dropmaResult)
router.route('/vpresult')
        .get(controller.getvpResult)
        .post(controller.storevpResult)
        .delete(controller.dropvpResult)

router.route('/mpresult')
        .get(controller.getmpResult)
        .post(controller.storempResult)
        .delete(controller.dropmpResult)

router.route('/oaresult')
        .get(controller.getoaResult)
        .post(controller.storeoaResult)
        .delete(controller.dropoaResult)
router.route('/login')
        .post(controller.login)
router.route('/search')
        .get(controller.search)
        .post(controller.addsearch)
router.route('/search/delete')
        .get(controller.delsearch)
        .post(controller.deletesearch)
router.route('/search/update')
        .get(controller.updsearch)
        .post(controller.updateSearch)
       



export default router;

