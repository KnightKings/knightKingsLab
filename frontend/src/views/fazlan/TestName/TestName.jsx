import React, { Component } from 'react';
import Managetestname from './TestNameManage'
import axios from 'axios'

import Addnewtest from './AddNewTest'



export default class Testname extends Component {

    constructor(props){
        super(props)
        this.state = {
            tests : [],
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
        console.log(this.state.tests)
    }
    
    componentWillMount(){
        this.getAllTests()
    }



    render(){
        
        let testName = this.state.tests.filter(    
            (test)=>{
                return test.LabTestName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;   
            }
        )

        return <div>
           
        <Addnewtest update ={() => this.update()}/>

        <div className="container col-md-12">
                    <input type="text" placeholder="Search By Test Name" style={{width: "300px",
                                                boxSizing: "border-box",
                                                border: "2px solid #ccc",
                                                borderRadius:"25px",
                                                fontSize: "14px",
                                                padding: "10px 20px 10px 20px",
                                                transition: "width 0.4s ease-in-out",
                                                float:"right",
                                                margin:"2px 0px 20px 0px"}} 
                                                value={this.state.search} onChange={this.updateSearch.bind(this)}/> 
        
        <table className="table" style={{ padding:"10px"}}> 
            <thead>
                <tr>
                    <th>Test ID</th>
                    <th>Test Name</th>
                    <th>Category</th>
                    <th>Sub Category</th>
                    <th></th>
                 </tr>   
            </thead>
            <tbody>
                {
                    testName.map(test => {
                        return <tr key={test.LabTestId}>
                            <td>{test.LabTestId}</td>
                            <td>{test.LabTestName}</td>
                            <td>{test.LabTestCategory}</td>
                            <td>{test.LabTestSubCategory}</td>
                            <td>
                                <Managetestname testId = {test.LabTestId} name={test.LabTestName} 
                                    category={test.LabTestCategory} subCategory = {test.LabTestSubCategory}  />
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
    </div>
    }

    getAllTests=()=>{
        axios.get('http://localhost:3001/Laboratory/LabTest').then(function(res){
            let tests = res.data.data;
            this.setState({tests});
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

}