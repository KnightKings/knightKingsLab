var mongoose = require ('../LaboratorySchema/DBConfig.js');
var LabTestSubCategorySchema = mongoose.model("LabTestSubCategory");

var LabTestSubCategoryController = function() {

    //Insert a LabTest Sub Category
    this.addLabTestSubCategory = function(data){
        return new Promise(function(Resolve, Reject){

            var LabTestSubCategory = new LabTestSubCategorySchema({

                LabTestSubCategoryId: data.LabTestSubCategoryId,
                
                LabTestSubCategoryName : data.LabTestSubCategoryName
                
                
            });

            LabTestSubCategory.save().then(function(){
                Resolve({status:200, message : "Lab Test Sub Category Added to the DataBase Successfully"}).catch(function(err){
                    Reject({status : 500, message : "Lab Test Sub Category could not be added to the database " + err});
                })
            });

        })

    };

    //Get all Lab Test Sub Category
    this.getAllLabTestSubCategory = function(){
        return new Promise(function(Resolve, Reject){

            LabTestSubCategorySchema.find().exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status:500, message: "Cannot retrieve any LabTest SubCategory, Error : " + err});
                })

            });
        })
    };


    //Delete a LabTest SubCategory
    this.deleteLabTestSubCategory= function (id){
        return new Promise(function(Resolve,Reject){
            LabTestSubCategorySchema.remove({LabTestSubCategoryId : id}).exec().then(function(){
                Resolve({status : 200, message: "Lab Test Sub Category deleted"}).catch(function(err){
                    Reject({status : 500, message:"Lab Test Sub Category can not be deleted"})
                })
            })

        })

    };


    //Update a LabTest Sub Category
    this.UpdateLabTestSubCategory= function(id,data){
        return new Promise(function(Resolve,Reject){
            LabTestSubCategorySchema.update({LabTestSubCategoryId : id}, data).exec().then(function(){
                Resolve({status:200, message : "Lab Test Sub  Category Updated Successfully"}).catch(function(err){
                    Reject({status:500, message : "Lab Test Sub Category cannot be updated, Error : " + err})
                })

            })

        })

    }


    //get LabTest Sub Category by id
    this.getLabTestSubCategorybyId = function(id){
        return new Promise(function(Resolve,Reject){
            LabTestSubCategorySchema.find({LabTestSubCategoryId : id}).exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status : 500, message: "LabTest Sub Category not exist" + err})
                })
            })

        })
    }

};

module.exports = new LabTestSubCategoryController;