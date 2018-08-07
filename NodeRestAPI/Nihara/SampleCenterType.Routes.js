var SampleCenterTypeController = require('./SampleCenterTypeController.js');

var express = require('express')
var Route = express.Router();

//Add a Sample Center Type
Route.post('/', function(req,res){

    SampleCenterTypeController.addSampleCenterType(req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })

})


//get all Sample Center Types
Route.get('/', function(req,res){

    SampleCenterTypeController.getAllSampleCenterType().then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//get Sample Center Types by id
Route.get('/id/:id', function(req,res){

    SampleCenterTypeController.getSampleCenterTypebyId(req.params.id).then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Update a Sample Center Type
Route.put('/:id', function(req,res){

    SampleCenterTypeController.UpdateSampleCenterType(req.params.id, req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Delete a Sample Center Type
Route.delete('/:id', function(req,res){

    SampleCenterTypeController.deleteSampleCenterType(req.params.id).then(function(data){
        res.status(data.status).send({message: data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })
})

module.exports = Route;
