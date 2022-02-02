const express = require('express');
const router = express.Router();

const materialMaster = require('./models/materialMaster');
const chemicalMaster = require('./models/chemicalMaster');

router.get('/get/material', async (request, response) => {
    const data = await materialMaster.find();
    response.send(data);
});

router.get('/get/chemical', async (request, response) => {
    const data = await chemicalMaster.find();
    response.send(data);
});

module.exports = router;