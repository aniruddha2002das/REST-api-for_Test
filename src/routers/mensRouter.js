const express = require('express');
const router = new express.Router();
const menRanking = require('../models/mensSchema');

router.post('/mens',async (req, res) => {
    try{
        const Athe = new menRanking(req.body);
        const newAthe = await Athe.save();
        res.status(200).send(newAthe);
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.get('/mens',async (req, res) => {
    try{
        let result = await menRanking.find();
        res.status(200).send(result);
    }
    catch(err) {
        res.status(500).send(err);
    }
});

router.get('/mens/:id',async (req, res) => {
    try{
        let id = req.params.id;
        let result = await menRanking.find({_id:id});
        if(!result){
            res.status(400).send();
        }
        else{
            res.status(200).send(result);
        }
    }
    catch(err) {
        res.status(500).send(err);
    }
});

router.patch('/mens/:id',async (req, res) => {
    try{
        let id = req.params.id;
        const updateAthe = await menRanking.updateOne({_id:id},req.body);
        if(!updateAthe){
            res.status(400).send();
        }
        else{
            res.status(200).send(updateAthe);
        }
    }
    catch(err) {
        res.status(500).send(err);
    }
});

router.delete('/mens/:id',async (req, res) => {
    try{
        let id = req.params.id;
        const deleteAthe = await menRanking.deleteOne({_id:id});
        if(!deleteAthe){
            res.status(400).send();
        }
        else{
            res.status(200).send(deleteAthe);
        }
    }
    catch(err) {
        res.status(500).send(err);
    }
});


module.exports = router;