var mongoose = require ('../LaboratorySchema/DBConfig.js');
var OrderSchema 	= mongoose.model('Order');


var OrderController = function(){
    this.insert = function(data)  {
        return new Promise(function(resolve, reject)  {
            var order = new OrderSchema({
                requestId: data.requestId,
                priority: data.priority,
                status:data.status,
                pNO:data.pNO,
                testName:data.testName,
                reqDate:data.reqDate,
                dueDate:data.dueDate,
                ptype:data.ptype,
                reqPerson:data.reqPerson,
                com:data.com


            });
            order.save().then(function()  {
                resolve({status: 200, message: "Added new order"});
            }).catch(function(err)  {
                reject({status: 500, message: "Error:- "+err});
            })
        })

    }

    this.update = function(id, data)  {
        return new Promise(function(resolve, reject)  {
            OrderSchema.update({requestId: id}, data).then(function()  {
                resolve({status: 200, message: "update order"});
            }).catch(function(err)  {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = function()  {
        return new Promise(function(resolve, reject)  {
            OrderSchema.find().exec().then(function(data)  {
                resolve({status: 200, data: data});
            }).catch(function(err)  {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = function(id)  {
        return new Promise(function(resolve, reject)  {
            OrderSchema.find({requestId:id}).exec().then(function(order)  {
                resolve({status: 200, data: order});
            }).catch(function(err)  {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = function(id)  {
        return new Promise(function(resolve, reject)  {
            OrderSchema.remove({requestId:id}).then(function()  {
                resolve({status: 200, message: "remove order"});
            }).catch(function(err)  {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}

module.exports = new OrderController();
