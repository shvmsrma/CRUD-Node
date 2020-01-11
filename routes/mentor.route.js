const express = require('express');
const router = express.Router();

const mentor_controller = require('../controllers/mentor.controller');


router.get('/test', mentor_controller.test);module.exports = router;

router.post('/create', mentor_controller.mentor_create);

router.get('/:id', mentor_controller.mentor_details);

router.put('/:id/update', mentor_controller.mentor_update);

router.delete('/:id/delete', mentor_controller.mentor_delete);