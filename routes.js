const express = require('express');
const router = express.Router();
const materialMaster = require('./models/materialMaster');

router.get('/get/material', async (request, response) => {
    const data = await materialMaster.find();
    response.send(data);
});

module.exports = router;