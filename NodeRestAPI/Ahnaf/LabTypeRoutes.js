var LabTypeController = require('./LabTypeController');

var express = require('express')
var Route = express.Router();

//Add a Lab Center Type

Route.post('/',function (req,res) {
    LabTypeController.addLabType(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
})

//get all Lab Center Types

Route.get('/',function (req,res) {
    LabTypeController.getAllLabCenterType().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    });
})

//get Lab Center Types by id
Route.get('/:LabTypeId', function(req,res){

    LabTypeController.getLabTypebyId(req.params.LabTypeId).then(function(data){
        res.status(data.status).send({data: data.data});
    }).catch(function(err){
            res.status(err.status).send({message:err.message});
        });
    })


//Update a Lab Center Type
Route.put('/:LabTypeId', function(req,res){

    LabTypeController.UpdateLabType(req.params.LabTypeId, req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
            res.status(err.status).send({message:err.message});
        })
    })



//Delete a Lab Center Type
Route.delete('/:LabTypeId', function(req,res){

    LabTypeController.deleteLabType(req.params.LabTypeId).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
            res.status(err.status).send({message: err.message});
        })
    })


module.exports = Route;
