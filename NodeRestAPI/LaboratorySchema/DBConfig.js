var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

//NIHARA'S SCHEMAS(SampleCenterTypeSchema, SampleCenterSchema)

var SampleCenterTypeSchema = new Schema({

    SampleCenterTypeID:{
      type: String,
      require : true
    },

    SampleCenterType:{
        type:String,
        require:true
    },

    SampleCenterDescription:{
        type:String,
        require:true
    }

});

var SampleCenterSchema = new Schema({

    SampleCenterType:{
        type:String,
        require:true
    },

    SampleCenterName:{
        type:String,
        require:true
    },

    InCharge:{
        type:String,
        require:true
    },

    Location:{
        type:String,
        require:true
    },

    Email:{
        type:String,
        require:true
    },

    Phone:{
        type:String,
        require:true
    }

});

//FAZLANS'S SCHEMAS(LabTests, LabTestCategory, LabTestSubCategory)
var LabTestSchema = new Schema ({
	
	
	LabTestName:{
		type:String,
		require : true
	},
	LabTestId:{
		type: Number,
		require : true
	},
	
	LabTestCategory:{
		type:String,
		require:true
	},
	
	LabTestSubCategory:{
		type: String,
		require:true
	}
});

var LabTestCategorySchema = new Schema({
	
	LabTestCategoryId:{
		type:Number,
		require:true
	},
	
	LabTestCategoryName:{
		type:String,
		require:true
	}
});

var LabTestSubCategorySchema = new Schema({
	
	LabTestSubCategoryId:{
		type:Number,
		require:true
	},
	
	LabTestSubCategoryName:{
		type:String,
		require:true
	}
});

//AHNAF'S SCHEMAS(LabType,Department,Lab shemas)

const LabType = new Schema({
    LabTypeId:{
        type:Number,
        required:true
    },
    LabTypeName:{
        type:String,
        required:true
    }
});

var DepartmentSchema = new Schema({
    DepartmentId:{
        type:Number,
        require:true
    },

    DepartmentName:{
        type:String,
        require:true
    }
});


var LabSchema = new Schema({

    LabId:{
        type:Number,
        seq:0
    },
    LabName:{
        type:String,
        require:true
    },
    LabType:{
        type:String,
        require:true
    },
    DepartmentName:{
        type:String,
        require:true
    },
    Count:{
        type:Number,
        require:true
    },
    InCharge:{
        type:String,
        require:true
    },

    Location:{
        type:String,
        require:true
    },

    Email:{
        type:String,
        require:true
    },

    Phone:{
        type:String,
        require:true
    }

});

//AKILA'S SCHEMA()

const OrderSchema = new Schema({
    requestId: {
        type: Number,
        require: true
    },

    priority:{
        type:String,
        require:true
    },

    status: {
        type: String,
        require: true
    },

    pNO:{
        type:String,
        require:true
    },

    testName:{
        type:String,
        require:true
    },

    reqDate:{
        type:String,
        require:true
    },

    dueDate:{
        type:String,
        require:true
    },

    ptype:{
        type:String,
        require:true
    },

    reqPerson:{
        type:String,
        require:true
    },

    com:{
        type:String,
        require:true
    }
});

//Nihara's MODELS
mongoose.model("SampleCenterType", SampleCenterTypeSchema);
mongoose.model("SampleCenter", SampleCenterSchema);

//FAZLAN'S MODELS
mongoose.model("LabTest",LabTestSchema);
mongoose.model("LabTestCategory",LabTestCategorySchema);
mongoose.model("LabTestSubCategory",LabTestSubCategorySchema);

//AHNAF'S MODELS
mongoose.model("LabType", LabType);
mongoose.model("Lab", LabSchema);
mongoose.model("Department",DepartmentSchema);

//AKILA'S MODELS
mongoose.model('Order', OrderSchema);

mongoose.connect('mongodb://127.0.0.1:27017/LaboratoryDB', function(err){

    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected to the Laboratory Database Successfully")
});


module.exports = mongoose;