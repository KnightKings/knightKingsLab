import React, { Component } from 'react';
import axios from 'axios'

import LabTypes from './LabType/LabTypes'
import LadDepar from './LabDepartments/LabDepartment'
import Labs from './Labs/Labs'

export default class index extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeNavLink : { labTypes : true , laboratoryDepartment : false , laboratories : false },
            labtypes:[],
            departments:[],
            labs:[],
                     
            navBarEvent : {activeTestName: "active" ,activelaboratoryDepartment:"",activelaboratories:""} 
        }
    }

    componentWillMount(){
        
        this.getAllLabTypes();
        this.getAllDepartment();
        this.getAllLabs();
    }

    TestNameNavPressed = () =>{
        this.setState({ activeNavLink : {labTypes : true , laboratoryDepartment : false , laboratories : false}})
        this.setState({navBarEvent : {activeTestName: "active" ,activeTestCate:"",testSubCategories:""} })
    }
    TestCategoriesPressed = () =>{
        this.setState({ activeNavLink : {labTypes : false , laboratoryDepartment : true , laboratories : false}})
        this.setState({navBarEvent : {activeTestName: "" ,activeTestCate:"active",testSubCategories:""} })
    }
    SubCategoriesPressed= () =>{
        this.setState({ activeNavLink : {labTypes : false , laboratoryDepartment : false , laboratories : true}})
        this.setState({navBarEvent : {activeTestName: "" ,activeTestCate:"",testSubCategories:"active"} })
    }


renderMainForm=() =>{
    if(this.state.activeNavLink.labTypes === true ){
        return <LabTypes Alltest = {this.state.labtypes}/>

    }else if(this.state.activeNavLink.laboratoryDepartment === true){
        return <LadDepar Alltest = {this.state.departments}/>

    }
    else if(this.state.activeNavLink.laboratories === true){
        return <Labs Alltest = {this.state.labs}/>

    }
            
}
render() {

    return <div>
            
            <div style={{color:"black"}}>
            <div className="container col-md-10" style={{
                margin: "-20px 0px 0px 0px",
                backgroundColor: "#FFF",
                opacity: "0.9",
                height: "700px"
            }} >
                <ul className="nav nav-tabs">
                    <li className={this.state.navBarEvent.activeTestName}><a onClick={this.TestNameNavPressed}>Lab Types</a></li>
                    <li className={this.state.navBarEvent.activeTestCate}><a onClick={this.TestCategoriesPressed}>Lab Department </a></li>
                    <li className={this.state.navBarEvent.testSubCategories}><a onClick={this.SubCategoriesPressed}>Labs</a></li>
                </ul>
                <center><h3><b>Laboratory Manager</b></h3></center>
                {
                    this.renderMainForm()
                }
                </div>   
            </div>
        </div>
}

getAllLabTypes() {
    axios.get('http://localhost:3001/Laboratory/labtypes')
        .then(function (res) {
            let labtypes = res.data;
            this.setState({labtypes});
        }.bind(this)).catch(function(err){
            console.log(err);
        });
    
}
getAllDepartment() {
    axios.get('http://localhost:3001/Laboratory/departments')
        .then(function (res) {
            let departments = res.data;
            this.setState({departments});
        }.bind(this)).catch(function(err){
            console.log(err);
        });
    
}
getAllLabs() {
    axios.get('http://localhost:3001/Laboratory/labs')
        .then(function (res) {
            let labs = res.data;
            this.setState({labs});
        }.bind(this)).catch(function(err){
            console.log(err);
        });
    
}

}