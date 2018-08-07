var express = require('express');
var Routes = express.Router();

//NIHARA'S ROUTES (SAMPLECENTER)

var SampleCenterTypeRoute = require('./Nihara/SampleCenterType.Routes');
Routes.use('/SampleCenterType/', SampleCenterTypeRoute);

var SampleCenterRoute = require('./Nihara/SampleCenter.Routes');
Routes.use('/SampleCenter/', SampleCenterRoute);


//FAZLAN'S ROUTES ()
var LabTestRoute = require('./Fazlan/LabTest.Routes');
Routes.use('/LabTest/', LabTestRoute);

var LabTestCategoryRoute = require('./Fazlan/LabTestCategory.Routes');
Routes.use('/LabTestCategory/', LabTestCategoryRoute);

var LabTestSubCategoryRoute = require('./Fazlan/LabTestSubCategory.Routes');
Routes.use('/LabTestSubCategory/', LabTestSubCategoryRoute);

//AHANAF'S ROUTES ()
var LabRoute = require('./Ahnaf/LabRoutes');
Routes.use('/labs/',LabRoute);

var DepartmentRoute = require('./Ahnaf/DepartmnetRoutes');
Routes.use('/departments/', DepartmentRoute);

var LabTypesRoute = require('./Ahnaf/LabTypeRoutes');
Routes.use('/labtypes/',LabTypesRoute);


//AKILA'S ROUTES (OrderManagement)

var OrderRoute       = require('./Akila/Order.Route');

Routes.use('/order/', OrderRoute);


module.exports = Routes;