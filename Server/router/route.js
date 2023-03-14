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

router.route('/maquestions')
        .get(controller.getmaQuestions) /** GET Request */
        .post(controller.insertmaQuestions) /** POST Request */
        .delete(controller.dropmaQuestions) /** DELETE Request */

export default router;

