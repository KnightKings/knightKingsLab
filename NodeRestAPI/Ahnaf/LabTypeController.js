var mongoose = require ('../LaboratorySchema/DBConfig.js');
var LabTypeSchema = mongoose.model("LabType");

var LabTypeController = function() {

    //Insert a LabType
    this.addLabType = function (labTypeInstance) {
        return new Promise(function (resolve,reject) {
            const labType = new LabTypeSchema({
                LabTypeId:labTypeInstance.LabTypeId,
                LabTypeName:labTypeInstance.LabTypeName
            })

            labType.save().then(function () {
                resolve({status:200,message:'Labtype added successfully'});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason});
            })
        })
    }




    //Get all Lab Center Types
    this.getAllLabCenterType = function(){
        return new Promise(function (resolve,reject) {

            LabTypeSchema.find().exec().then(function (value) {
                resolve({status:200,"data":value});
            }).catch(function (reason) {
                    reject({status:500, message: "Cannot retrieve any Lab center types, Error : " + reason});
                })

            });
    };



    //Delete a Lab Center Type
    this.deleteLabType= function (id){
        return new Promise(function(Resolve,Reject){
            LabTypeSchema.remove({LabTypeId : id}).exec().then(function () {
                Resolve({status:200,message : "Lab Center Type deleted"});
            }).catch(function(err){
                    Reject({status : 500, message:"Lab Center Type can not be deleted"});
                })
            });

    };


    //Update a Lab Center Type
    this.UpdateLabType= function(id,data){
        return new Promise(function(Resolve,Reject){
            LabTypeSchema.update({LabTypeId : id}, data).exec().then(function (value) {
                Resolve({status:200,message : "Lab Center Type Updated Successfully"});
            }).catch(function(err){
                    Reject({status:500, message : "Lab Center Type cannot be updated, Error : " + err});
                })

            });
    };

    //get Sample Lab Type by id
    this.getLabTypebyId = function(id){
        return new Promise(function(Resolve,Reject){
            LabTypeSchema.find({LabTypeId : id}).exec().then(function (value) {
                Resolve({status:200,"data":value});
            }).catch(function(err){
                    Reject({status : 500, message: "Lab Center Type not exist" + err});
                })
            });
    }

};

module.exports = new LabTypeController;