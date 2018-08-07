var LabTestController = require('./LabTestController');

var express = require('express')
var Route = express.Router();

//Add a Lab Test
Route.post('/', function(req,res){

    LabTestController.addLabTest(req.body).then(function(response){
        res.status(response.status).send({message:response.message});}).catch(function(err){
            res.status(reason.status).send({message: reason.message})
        })
    })



//get all LabTests
Route.get('/', function(req,res){

    LabTestController.getAllLabTest().then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//get LabTest by id
Route.get('/:id', function(req,res){

    LabTestController.getLabTestbyId(req.params.id).then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Update a LabTest
Route.put('/:id', function(req,res){

    LabTestController.UpdateLabTest(req.params.id, req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Delete a LabTest
Route.delete('/:id', function(req,res){

    LabTestController.deleteLabTest(req.params.id).then(function(data){
        res.status(data.status).send({message: data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })
})

module.exports = Route;
