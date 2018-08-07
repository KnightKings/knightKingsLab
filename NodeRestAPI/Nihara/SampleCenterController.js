var mongoose = require ('../LaboratorySchema/DBConfig.js');
var SampleCenterSchema = mongoose.model("SampleCenter");

var SampleCenterController = function() {

    //Insert a Sample Center
    this.addSampleCenter = function(data){
        return new Promise(function(Resolve, Reject){

            var SampleCenter = new SampleCenterSchema({

                SampleCenterType: data.SampleCenterType,
                SampleCenterName : data.SampleCenterName,
                InCharge : data.InCharge,
                Location : data.Location,
                Email : data.Email,
                Phone : data.Phone
            });

            SampleCenter.save().then(function(){
                Resolve({status:200, message : "Sample Center Added to the DataBase Successfully"}).catch(function(err){
                    Reject({status : 500, message : "Sample Center could not be added to the database " + err});
                })
            });

        })

    };

    //Get all Sample Centers
    this.getAllSampleCenter = function(){
        return new Promise(function(Resolve, Reject){

            SampleCenterSchema.find().exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status:500, message: "Cannot retrieve any sample centers, Error : " + err});
                })

            });
        })
    };


    //Delete a Sample Center
    this.deleteSampleCenter= function (name){
        return new Promise(function(Resolve,Reject){
            SampleCenterSchema.remove({SampleCenterName:name}).exec().then(function(){
                Resolve({status : 200, message: "Sample Center deleted"}).catch(function(err){
                    Reject({status : 500, message:"Sample Center can not be deleted"})
                })
            })

        })

    };


    //Update a Sample Center
    this.UpdateSampleCenter= function(id,data){
        return new Promise(function(Resolve,Reject){
            SampleCenterSchema.update({SampleCenterName:id}, data).exec().then(function(){
                Resolve({status:200, message : "Sample Center Updated Successfully"}).catch(function(err){
                    Reject({status:500, message : "Sample Center cannot be updated, Error : " + err})
                })

            })

        })

    }


    //get Sample Center by id
    this.getSampleCenterbyId = function(id){
        return new Promise(function(Resolve,Reject){
            SampleCenterSchema.find({_id : id}).exec().then(function(data){
                Resolve({status:200, data: data}).catch(function(err){
                    Reject({status : 500, message: "Sample Center not exist" + err})
                })
            })

        })
    }

};

module.exports = new SampleCenterController;