var LabTestSubCategoryController = require('./LabTestSubCategoryController');

var express = require('express')
var Route = express.Router();

//Add a LabTest Sub Category
Route.post('/', function(req,res){

    LabTestSubCategoryController.addLabTestSubCategory(req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })

})


//get all LabTest Sub Categories
Route.get('/', function(req,res){

    LabTestSubCategoryController.getAllLabTestSubCategory().then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//get LabTest Sub Categories by id
Route.get('/id/:id', function(req,res){

    LabTestSubCategoryController.getLabTestSubCategorybyId(req.params.id).then(function(data){
        res.status(data.status).send({data: data.data}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Update a LabTest Sub Category
Route.put('/:id', function(req,res){

    LabTestSubCategoryController.UpdateLabTestSubCategory(req.params.id, req.body).then(function(data){
        res.status(data.status).send({message:data.message}).catch(function(err){
            res.status(err.status).send({message:err.message})
        })
    })
})


//Delete a LabTest Sub Category
Route.delete('/:id', function(req,res){

    LabTestSubCategoryController.deleteLabTestSubCategory(req.params.id).then(function(data){
        res.status(data.status).send({message: data.message}).catch(function(err){
            res.status(err.status).send({message: err.message})
        })
    })
})

module.exports = Route;
