import React, { Component } from 'react';

import Testcategories from './TestCategory/TestCategories'
import Testsubcategories from './TestSubCategory/TestSubCategories'
import Testname from './TestName/TestName'


export default class LabTest extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeNavLink : { testName : true , testCategories : false , testSubCategories : false },  
            navBarEvent : {activeTestName: "active" ,activeTestCate:"",testSubCategories:""} 
        }
    }

    update(){
        this.getAllTests()
    }

    TestNameNavPressed = () =>{
        this.setState({ activeNavLink : {testName : true , testCategories : false , testSubCategories : false}})
        this.setState({navBarEvent : {activeTestName: "active" ,activeTestCate:"",testSubCategories:""} })
    }
    TestCategoriesPressed = () =>{
        this.setState({ activeNavLink : {testName : false , testCategories : true , testSubCategories : false}})
        this.setState({navBarEvent : {activeTestName: "" ,activeTestCate:"active",testSubCategories:""} })
    }
    SubCategoriesPressed= () =>{
        this.setState({ activeNavLink : {testName : false , testCategories : false , testSubCategories : true}})
        this.setState({navBarEvent : {activeTestName: "" ,activeTestCate:"",activeTestSubCate:"active"} })
    }

    renderMainForm=() =>{
        
        if(this.state.activeNavLink.testName === true ){
            return <Testname />

        }else if(this.state.activeNavLink.testCategories === true){
            return <Testcategories />

        }else if(this.state.activeNavLink.testSubCategories === true){
            return <Testsubcategories Alltest = {this.state.tests}/>

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
                        <li className={this.state.navBarEvent.activeTestName}><a onClick={this.TestNameNavPressed}>Test Name</a></li>
                        <li className={this.state.navBarEvent.activeTestCate}><a onClick={this.TestCategoriesPressed}>Test Categories</a></li>
                        <li className={this.state.navBarEvent.activeTestSubCate}><a onClick={this.SubCategoriesPressed}>Test Sub Categories</a></li>
                    </ul>
                    <center><h3><b>Lab Test Manager</b></h3></center>
                    {
                        this.renderMainForm()
                    }
                    </div>   
                </div>
            </div>
    }

   

    
}