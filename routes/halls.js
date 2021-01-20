const express = require('express');

const {
    getHalls, 
    getHall, 
    createHall, 
    updateHall, 
    deleteHall
} = require('../controllers/halls');


const router = express.Router();

router
    .route('/')
    .get(getHalls)
    .post(createHall);

router
    .route('/:id')
    .get(getHall)
    .put(updateHall)
    .delete(deleteHall);

module.exports = router;