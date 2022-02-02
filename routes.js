const express = require('express');
const router = express.Router();

const MaterialMaster = require('./models/materialMaster');
const ChemicalMaster = require('./models/chemicalMaster');

// material master
router.get('/get/material', async (request, response) => {
    const data = await MaterialMaster.find();
    response.send(data);
});

router.post('/post/material', (request, response) => {
    // const material = new MaterialMaster({
    //     modelName: request.body.modelName,
    //     gradeName: request.body.gradeName,
    //     diameter: request.body.diameter
    // });
    // await material.save();
    // response.send(material);
    response.send("hello");
})
// --------

// chemical master
router.get('/get/chemical', async (request, response) => {
    const data = await ChemicalMaster.find();
    response.send(data);
});

module.exports = router;