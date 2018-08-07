import React, { Component } from 'react';
import ManageLab from './Labmanage'
import axios from 'axios'
import Addlab from './AddLab'


export default class Lab extends Component {

    constructor(props){
        super(props)
        this.state = {
            labs:[],
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    
    componentWillMount(){
        this.getAllLabs();
    }

    render(){
        let LabName = this.props.Alltest.filter(
            (lab)=>{
                return lab.LabName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )
        return <div>
            <Addlab/>
        <div className="container col-md-12">
                    <input type="text" placeholder="Search By Lab Name" style={{width: "300px",
                                                boxSizing: "border-box",
                                                border: "2px solid #ccc",
                                                borderRadius:"25px",
                                                fontSize: "14px",
                                                padding: "10px 20px 10px 20px",
                                                transition: "width 0.4s ease-in-out",
                                                float:"right",
                                                margin:"20px 0px 20px 0px"}}value={this.state.search} onChange={this.updateSearch.bind(this)}/> 
        
        <table className="table" style={{ padding:"10px"}}> 
            <thead>
                
                <tr>
                        <th> LabID</th>
                        <th> LabName</th>
                        <th> LabType</th>
                        <th> LabDepartment</th>
                        <th> LabCount</th>
                        <th> LabIncharge</th>
                        <th> Location</th>
                        <th> Email</th>
                        <th> Phone</th>
                        
                    </tr>
                    
            </thead>
            <tbody>    
            {
                        LabName.map(lab => {
                            console.log(lab);
                            return (                   
                                <ManageLab LabId={lab.LabId} LabName = {lab.LabName} LabType={lab.LabType} DepartmentName = {lab.DepartmentName} 
                                Count={lab.Count} InCharge = {lab.InCharge} Location={lab.Location} Email = {lab.Email} Phone={lab.Phone}  lab={lab} />
                            );
                        })
                    }
                        
                    </tbody>
        </table>
        </div>
    </div>
    }

    getAllLabs() {
        axios.get('http://localhost:3001/Laboratory/labs/')
            .then(function (res) {
                let labs = res.data;
                this.setState({labs});
            }.bind(this)).catch(function(err){
                console.log(err);
            });
        
    }
}