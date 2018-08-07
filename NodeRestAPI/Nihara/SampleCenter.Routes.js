var SampleCenterController = require('./SampleCenterController');

var express = require('express')
var Route = express.Router();

//Add a Sample Center
Route.post('/', function(req,res){

    SampleCenterController.addSampleCenter(req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })

})


//get all Sample Centers
Route.get('/', function(req,res){

    SampleCenterController.getAllSampleCenter().then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//get Sample Center by id
Route.get('/id/:id', function(req,res){

    SampleCenterController.getSampleCenterbyId(req.params.id).then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Update a Sample Center
Route.put('/:id', function(req,res){

    SampleCenterController.UpdateSampleCenter(req.params.id, req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Delete a Sample Center
Route.delete('/:id', function(req,res){

    SampleCenterController.deleteSampleCenter(req.params.id).then(function(data){
        res.status(data.status).send({message: data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })
})

module.exports = Route;
