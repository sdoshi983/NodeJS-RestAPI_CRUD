const express = require('express');
const router = express.Router();

const MaterialMaster = require('./models/materialMaster');
const ChemicalMaster = require('./models/chemicalMaster');

// material master
router.get('/material', async (request, response) => {  // fetch
    const data = await MaterialMaster.find();
    response.send(data);
});

router.post('/material', async (request, response) => {    // insert
    const material = new MaterialMaster(request.body)
    await material.save();
    response.send(material);
})
// --------

// chemical master
router.get('/chemical', async (request, response) => {  // fetch
    const data = await ChemicalMaster.find();
    response.send(data);
});

router.post('/chemical', async (request, response) => {    // insert
    const chemical = new ChemicalMaster(request.body)
    chemical.save();
    response.send(chemical);
})

module.exports = router;