const express = require('express');
const router = express.Router();

const MaterialMaster = require('./models/materialMaster');
const ChemicalMaster = require('./models/chemicalMaster');

// material master
router.get('/get/material', async (request, response) => {
    const data = await MaterialMaster.find();
    response.send(data);
});

router.post('/post/material', async (request, response) => {
    const material = new MaterialMaster(request.body)
    await material.save();
    response.send(material);
})
// --------

// chemical master
router.get('/get/chemical', async (request, response) => {
    const data = await ChemicalMaster.find();
    response.send(data);
});

router.post('/post/chemical', async (request, response) => {
    const chemical = new ChemicalMaster(request.body)
    chemical.save();
    response.send(chemical);
})

module.exports = router;