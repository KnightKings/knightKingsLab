import React, { Component } from 'react';
import ManageDepartmentType from './labDepartmentmanagment'
import axios from 'axios'
import Adddepart from './AddDepart'



export default class LabDepartments extends Component {

    constructor(props){
        super(props)
        this.state = {
            departments:[],
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    
    componentWillMount(){
        this.getAllDepartments();
    }

    render(){
        let DepartmentName = this.props.Alltest.filter(
            (department)=>{
                return department.DepartmentName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )
        return <div>
            <Adddepart/>
        <div className="container col-md-12">
                    <input type="text" placeholder="Search By Department Name" style={{width: "300px",
                                                boxSizing: "border-box",
                                                border: "2px solid #ccc",
                                                borderRadius:"25px",
                                                fontSize: "14px",
                                                padding: "10px 20px 10px 20px",
                                                transition: "width 0.4s ease-in-out",
                                                float:"right",
                                                margin:"20px 0px 20px 0px"}}
                                                value={this.state.search} onChange={this.updateSearch.bind(this)}/> 
        
        <table className="table" style={{ padding:"10px"}}> 
            <thead>
                
                <tr>
                        <th> LabDepartmentID</th>
                        <th> LabDepartmentName</th>
                    </tr>
                    
            </thead>
            <tbody>    
                   
                    {
                        DepartmentName.map(department => {
                            console.log(department);
                            return (                   
                                <ManageDepartmentType DepartmentId={department.DepartmentId} DepartmentName= {department.DepartmentName} department={department} />
                            );
                        })
                    }
                        
                    </tbody>
        </table>
        </div>
    </div>
    }

    getAllDepartments() {
        axios.get('http://localhost:3001/Laboratory/departments/')
            .then(function (res) {
                let departments = res.data;
                this.setState({departments});
            }.bind(this)).catch(function(err){
                console.log(err);
            });
        
    }
}