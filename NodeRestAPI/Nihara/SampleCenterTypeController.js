var mongoose = require ('../LaboratorySchema/DBConfig.js');
var SampleCenterTypeSchema = mongoose.model("SampleCenterType");

    var SampleCenterTypeController = function() {

    //Insert a Sample Center Type
    this.addSampleCenterType = function(data){
        return new Promise(function(Resolve, Reject){

            var SampleCenterType = new SampleCenterTypeSchema({
                SampleCenterTypeID : data.SampleCenterTypeID,
                SampleCenterType: data.SampleCenterType,
                SampleCenterDescription : data.SampleCenterDescription
            });

            SampleCenterType.save().then(function(){
                Resolve({status:200, message : "Sample Center Type Added to the DataBase Successfully"}).catch(function(err){
                    Reject({status : 500, message : "Sample Center Type could not be added to the database " + err});
                })
            });

        })

    };

    //Get all Sample Center Types
    this.getAllSampleCenterType = function(){
        return new Promise(function(Resolve, Reject){

            SampleCenterTypeSchema.find().exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status:500, message: "Cannot retrieve any sample center types, Error : " + err});
                })

            });
        })
    };


    //Delete a Sample Center Type
    this.deleteSampleCenterType= function (id){
        return new Promise(function(Resolve,Reject){
            SampleCenterTypeSchema.remove({SampleCenterType:id}).exec().then(function(){
                Resolve({status : 200, message: "Sample Center Type deleted"}).catch(function(err){
                    Reject({status : 500, message:"Sample Center Type can not be deleted"})
                })
            })

        })

    };


    //Update a Sample Center Type
    this.UpdateSampleCenterType= function(id,data){
        return new Promise(function(Resolve,Reject){
            SampleCenterTypeSchema.update({_id:id}, data).exec().then(function(){
                Resolve({status:200, message : "Sample Center Type Updated Successfully"}).catch(function(err){
                    Reject({status:500, message : "Sample Center Type cannot be updated, Error : " + err})
                })

            })

        })

    }


        //get Sample Center Type by id
        this.getSampleCenterTypebyId = function(id){
            return new Promise(function(Resolve,Reject){
                SampleCenterTypeSchema.find({_id : id}).exec().then(function(data){
                    Resolve({status:200, data: data}).catch(function(err){
                        Reject({status : 500, message: "Sample Center Type not exist" + err})
                    })
                })

            })
        }

};

module.exports = new SampleCenterTypeController;