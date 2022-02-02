const express = require('express');
const router = express.Router();

const MaterialMaster = require('./models/materialMaster');
const ChemicalMaster = require('./models/chemicalMaster');
const req = require('express/lib/request');

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

router.patch('/material/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const material = await MaterialMaster.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(material);
})

router.delete('/material/:id', async (request, response) => {   // delete
    try{
        const _id = request.params.id;
        const material = await MaterialMaster.findByIdAndDelete(_id);
        response.send(material);
    }catch (e){
        response.send(e);
    }
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

router.patch('/chemical/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const chemical = await ChemicalMaster.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(chemical);
})

router.delete('/chemical/:id', async (request, response) => {
    const _id = request.params.id;
    const chemical = await ChemicalMaster.findByIdAndDelete(_id);
    response.send(chemical);
})
module.exports = router;