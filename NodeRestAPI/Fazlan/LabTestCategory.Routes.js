var LabTestCategoryController = require('./LabTestCategoryController');

var express = require('express')
var Route = express.Router();

//Add a LabTest Category
Route.post('/', function(req,res){

    LabTestCategoryController.addLabTestCategory(req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })

})


//get all LabTest Categories
Route.get('/', function(req,res){

    LabTestCategoryController.getAllLabTestCategory().then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//get LabTest Categories by id
Route.get('/id/:id', function(req,res){

    LabTestCategoryController.getLabTestCategorybyId(req.params.id).then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Update a LabTest Category
Route.put('/:id', function(req,res){

    LabTestCategoryController.UpdateLabTestCategory(req.params.id, req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Delete a LabTest Category
Route.delete('/:id', function(req,res){

    LabTestCategoryController.deleteLabTestCategory(req.params.id).then(function(data){
        res.status(data.status).send({message: data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })
})

module.exports = Route;
