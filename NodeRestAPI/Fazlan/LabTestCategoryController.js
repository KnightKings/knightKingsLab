var mongoose = require ('../LaboratorySchema/DBConfig.js');
var LabTestCategorySchema = mongoose.model("LabTestCategory");

var LabTestCategoryController = function() {

    //Insert a LabTestCategory
    this.addLabTestCategory = function(data){
        return new Promise(function(Resolve, Reject){

            var LabTestCategory = new LabTestCategorySchema({

                LabTestCategoryId: data.LabTestCategoryId,
                
                LabTestCategoryName : data.LabTestCategoryName
                
                
            });

            LabTestCategory.save().then(function(){
                Resolve({status:200, message : "Lab Test Category Added to the DataBase Successfully"}).catch(function(err){
                    Reject({status : 500, message : "Lab Test Category could not be added to the database " + err});
                })
            });

        })

    };

    //Get all LabTestCategory
    this.getAllLabTestCategory = function(){
        return new Promise(function(Resolve, Reject){

            LabTestCategorySchema.find().exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status:500, message: "Cannot retrieve any LabTestCategory, Error : " + err});
                })

            });
        })
    };


    //Delete a LabTestCategory
    this.deleteLabTestCategory= function (id){
        return new Promise(function(Resolve,Reject){
            LabTestCategorySchema.remove({LabTestCategoryId:id}).exec().then(function(){
                Resolve({status : 200, message: "Lab Test Category deleted"}).catch(function(err){
                    Reject({status : 500, message:"Lab Test Category can not be deleted"})
                })
            })

        })

    };


    //Update a LabTestCategory
    this.UpdateLabTestCategory= function(id,data){
        return new Promise(function(Resolve,Reject){
            LabTestCategorySchema.update({LabTestCategoryId:id}, data).exec().then(function(){
                Resolve({status:200, message : "LabTestCategory Updated Successfully"}).catch(function(err){
                    Reject({status:500, message : "LabTestCategory cannot be updated, Error : " + err})
                })

            })

        })

    }


    //get LabTestCategory by id
    this.getLabTestCategorybyId = function(id){
        return new Promise(function(Resolve,Reject){
            LabTestCategorySchema.find({LabTestCategoryId : id}).exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status : 500, message: "LabTestCategory not exist" + err})
                })
            })

        })
    }

};

module.exports = new LabTestCategoryController;