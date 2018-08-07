var DepartmentController = require('./DepartmentController');

var express = require('express')
var Route = express.Router();

//Add a Department

Route.post('/',function (req,res) {
    DepartmentController.addDepartment(req.body).then(function (response) {
        res.status(response.status).send(response.message);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    })
})

//get all Department

Route.get('/',function (req,res) {
    DepartmentController.getAllDepartment().then(function (response) {
        res.status(response.status).send(response.data);
    }).catch(function (reason) {
        res.status(reason.status).send(reason.message);
    });
})

//get Department
Route.get('/:DepartmentId', function(req,res){

    DepartmentController.getDepartmentbyId(req.params.DepartmentId).then(function(data){
        res.status(data.status).send({data: data.data});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    });
})


//Update a Department
Route.put('/:DepartmentId', function(req,res){

    DepartmentController.UpdateDepartment(req.params.DepartmentId, req.body).then(function(data){
        res.status(data.status).send({message:data.message});
    }).catch(function(err){
        res.status(err.status).send({message:err.message});
    })
})



//Delete a Department
Route.delete('/:DepartmentId', function(req,res){

    DepartmentController.deleteDepartment(req.params.DepartmentId).then(function(data){
        res.status(data.status).send({message: data.message});
    }).catch(function(err){
        res.status(err.status).send({message: err.message});
    })
})


module.exports = Route;
