var mongoose = require ('../LaboratorySchema/DBConfig.js');
var LabSchema = mongoose.model("Lab");

var LabController = function() {

    //Insert a Lab
    this.addLab = function (LabInstance) {
        return new Promise(function (resolve,reject) {
            const Lab = new LabSchema({
                LabId:LabInstance.LabId,
                LabName:LabInstance.LabName,
                LabType:LabInstance.LabType,
                DepartmentName:LabInstance.DepartmentName,
                Count:LabInstance.Count,
                InCharge:LabInstance.InCharge,
                Location:LabInstance.Location,
                Email:LabInstance.Email,
                Phone:LabInstance.Phone
            })

            Lab.save().then(function () {
                resolve({status:200,message:'Lab added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }




    //Get all Lab
    this.getAllLabs = function(){
        return new Promise(function (resolve,reject) {

            LabSchema.find().exec().then(function (value) {
                resolve({status:200,"data":value});
            }).catch(function (reason) {
                reject({status:500, message: "Cannot retrieve any Lab, Error : " + reason});
            })

        });
    };



    //Delete a Lab
    this.deleteLab= function (id){
        return new Promise(function(Resolve,Reject){
            LabSchema.remove({LabId : id}).exec().then(function () {
                Resolve({status:200,message : "Lab deleted"});
            }).catch(function(err){
                Reject({status : 500, message:"Lab can not be deleted"});
            })
        });

    };


    //Update a Lab
    this.UpdateLab= function(id,data){
        return new Promise(function(Resolve,Reject){
            LabSchema.update({LabId : id}, data).exec().then(function (value) {
                Resolve({status:200,message : "Lab Updated Successfully"});
            }).catch(function(err){
                Reject({status:500, message : "Lab cannot be updated, Error : " + err});
            })

        });
    };

    //get Lab by id
    this.getLabbyId = function(id){
        return new Promise(function(Resolve,Reject){
            LabSchema.find({LabId : id}).exec().then(function (value) {
                Resolve({status:200,"data":value});
            }).catch(function(err){
                Reject({status : 500, message: "Lab not exist" + err});
            })
        });
    }

};

module.exports = new LabController;