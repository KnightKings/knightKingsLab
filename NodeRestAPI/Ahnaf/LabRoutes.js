var LabController = require('./LabController');

var express = require('express')
var Route = express.Router();

//Add a Lab

Route.post('/',function (req,res) {
    LabController.addLab(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
})

//get all Labs

Route.get('/',function (req,res) {
    LabController.getAllLabs().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    });
})

//get Department
Route.get('/:LabId', function(req,res){

    LabController.getLabbyId(req.params.LabId).then(function(data){
        res.status(data.status).send({data: data.data});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    });
})


//Update a Lab
Route.put('/:LabId', function(req,res){

    LabController.UpdateLab(req.params.LabId, req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})



//Delete a Lab
Route.delete('/:LabId', function(req,res){

    LabController.deleteLab(req.params.LabId).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(err.status).send({message: err.message});
    })
})


module.exports = Route;
