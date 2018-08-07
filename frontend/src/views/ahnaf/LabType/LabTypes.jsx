import React, { Component } from 'react';
import axios from 'axios'

import Addlabtype from './AddLabType'
import Labtype from './labTypemanagment'

export default class LabTypes extends Component {

    constructor(props){
        super(props)
        this.state = {
            labtypes:[],
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    componentWillMount(){
        this.getAllLabTypes();
    }

    render(){
        let LabTypeName = this.props.Alltest.filter(
            (labtype)=>{
                return labtype.LabTypeName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )
        return <div>
            <Addlabtype/>
        <div className="container col-md-12">
                    <input type="text" placeholder="Search LabType" style={{width: "300px",
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
                        <th> LabTypeID</th>
                        <th> LabType</th>
                    </tr>
                    
            </thead>
            <tbody>    
                    {
                        LabTypeName.map(labtype => {
                            console.log(labtype);
                            return (                   
                                <Labtype LabTypeId={labtype.LabTypeId} LabTypeName= {labtype.LabTypeName} labType={labtype} />
                            );
                        })
                    }
                        
                    </tbody>
        </table>
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

}