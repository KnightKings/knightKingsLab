import React, { Component } from 'react'
import { HashRouter as Router, Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route';

import Header from './raw/Header'
import Footer from './raw/footer'
import Sidebar from './raw/sideBar';
import Pagenotfound from './raw/PageNotFound'
import Login from './Login'


//import samplecentermanager from "./views/nihara/SampleCenterManagement";


import LabOrder from './views/martin/LabOrders'
import Labtest from './views/fazlan/LabTest'
import Laboratorymanager from './views/ahnaf/index'
import samplecentermanager from './views/nihara/SampleCenterManagement'
import Laborder from './views/martin/LabOrder/LabOrder'


export default class App extends Component {

    render() {
        return (
            <Router>
               <div >
                    <Switch>
                        <Route path="/" exact static  component={Login} />
                        <div>
                            <Header />
                            <Sidebar />




                            <Route path="/labTest" exact static component={Labtest}/> 

                            <Route path="/LabOrder" component={LabOrder}/>        

                            <Route path="/SampleCenterManager" component={samplecentermanager}/>       

                            <Route path="/LaboratoryManager" component={Laboratorymanager}/>  





                            {/*<Route path="/LabOrder" exact static component={Laborder}/> */}
                            {/*<Route path="/labTest" exact static component={Labtest}/> */}
                            {/*<Route path="/SampleCenterManager" exact static component={samplecentermanager}/>      */}
                            {/*<Route path="/LaboratoryManager" exact static component={Laboratorymanager}/>  */}

                            <Footer />
                        </div>
                        <Route path="/*" exact static component={Pagenotfound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
