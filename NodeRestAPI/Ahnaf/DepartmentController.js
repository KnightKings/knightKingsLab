var mongoose = require ('../LaboratorySchema/DBConfig.js');
var DepartmentSchema = mongoose.model("Department");

var DepartmentController = function() {

    //Insert a LabType
    this.addDepartment = function (DepartmentInstance) {
        return new Promise(function (resolve,reject) {
            const Department = new DepartmentSchema({
                DepartmentId:DepartmentInstance.DepartmentId,
                DepartmentName:DepartmentInstance.DepartmentName
            })

            Department.save().then(function () {
                resolve({status:200,message:'Department added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }




    //Get all Department Types
    this.getAllDepartment = function(){
        return new Promise(function (resolve,reject) {

            DepartmentSchema.find().exec().then(function (value) {
                resolve({status:200,"data":value});
            }).catch(function (reason) {
                reject({status:500, message: "Cannot retrieve any Department, Error : " + reason});
            })

        });
    };



    //Delete a Department
    this.deleteDepartment= function (id){
        return new Promise(function(Resolve,Reject){
            DepartmentSchema.remove({DepartmentId : id}).exec().then(function () {
                Resolve({status:200,message : "Department deleted"});
            }).catch(function(err){
                Reject({status : 500, message:"Department can not be deleted"});
            })
        });

    };


    //Update a Department
    this.UpdateDepartment= function(id,data){
        return new Promise(function(Resolve,Reject){
            DepartmentSchema.update({DepartmentId : id}, data).exec().then(function (value) {
                Resolve({status:200,message : "Department Updated Successfully"});
            }).catch(function(err){
                Reject({status:500, message : "Department cannot be updated, Error : " + err});
            })

        });
    };

    //get Department by id
    this.getDepartmentbyId = function(id){
        return new Promise(function(Resolve,Reject){
            DepartmentSchema.find({DepartmentId : id}).exec().then(function (value) {
                Resolve({status:200,"data":value});
            }).catch(function(err){
                Reject({status : 500, message: "Department not exist" + err});
            })
        });
    }

};

module.exports = new DepartmentController;