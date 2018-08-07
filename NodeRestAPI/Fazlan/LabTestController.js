var mongoose = require ('../LaboratorySchema/DBConfig.js');
var LabTestSchema = mongoose.model("LabTest");

var LabTestController = function() {

    //Insert a LabTest
    this.addLabTest = function(labtestInstance){
        return new Promise(function(Resolve, Reject){

            const LabTest = new LabTestSchema({

                LabTestId : labtestInstance.LabTestId,
                LabTestName : labtestInstance.LabTestName,
                LabTestCategory : labtestInstance.LabTestCategory,
                LabTestSubCategory : labtestInstance.LabTestSubCategory,
                
            });

            LabTest.save().then(function(){
                Resolve({status:200, message : "Lab Test Added to the DataBase Successfully"});}).catch(function(err){
                    Reject({status : 500, message : "Lab Test could not be added to the database " + err});
                })
            });
    };

    //Get all LabTests
    this.getAllLabTest = function(){
        return new Promise(function(Resolve, Reject){

            LabTestSchema.find().exec().then(function(data){
                Resolve({status:200, "data": data});}).catch(function(err){
                    Reject({status:500, message: "Cannot retrieve any LabTest, Error : " + err});
                })
            });
    
    };


    //Delete a LabTest
    this.deleteLabTest= function (id){
        return new Promise(function(Resolve,Reject){
            LabTestSchema.remove({LabTestId : id}).exec().then(function(){
                Resolve({status : 200, message: "Lab Test deleted"});}).catch(function(err){
                    Reject({status : 500, message:"Lab Test can not be deleted"})
                })
            })
    };


    //Update a LabTest
    this.UpdateLabTest= function(id,data){
        return new Promise(function(Resolve,Reject){
            LabTestSchema.update({LabTestId : id}, data).exec().then(function(){
                Resolve({status:200, message : "LabTest Updated Successfully"});}).catch(function(err){
                    Reject({status:500, message : "LabTest cannot be updated, Error : " + err})
                })

            })

    

    }


    //get LabTest by id
    this.getLabTestbyId = function(id){
        return new Promise(function(Resolve,Reject){
            LabTestSchema.find({LabTestId : id}).exec().then(function(data){
                Resolve({status:200, "data" : data});}).catch(function(err){
                    Reject({status : 500, message: "LabTest not exist" + err})
                })
            })
    }

};

module.exports = new LabTestController;