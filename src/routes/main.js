const express= require ('express');

const router = express.Router();
 const mainControllers = require ('../controllers/mainControllers');


 router.get('/', mainControllers.index);

router.get('/contact', mainControllers.contact);


router.get('/about', mainControllers.about);


module.exports= router;