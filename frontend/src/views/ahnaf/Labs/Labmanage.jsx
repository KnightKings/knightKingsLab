import React,{Component} from 'react';
import axios from 'axios'

export default class Labmanage extends Component{

    constructor(props){
        super(props)
        this.state = {
            labs: this.props.lab,
            labName: this.props.labName,
           value: '',
           EditedLabName : {},
           CurrentValues : []
           
        }

    }

    getDerivedStateFromProps() {
        this.setState({labId : this.props.LabId,labName: this.props.LabName,LabType : this.props.LabType, DepartmentName : this.props.DepartmentName, 
            Count : this.props.Count, InCharge : this.props.InCharge, Location:this.props.Location, Email : this.props.Email, Phone:this.props.Phone});
    }
    componentWillMount(){
        this.getAllLabs()
    } 

    onNameChange(event){
        this.name = event.target.value;
    }

    getNewState = () =>{
        const here1 = this;
        return new Promise(function(resolve){
            here1.setState({  EditedLabName :
        {
            LabId: here1.props.LabId,
            LabName : here1.name
        }
            })
            resolve({"message":"success"})
        })
    }

    onEdit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    
        const here = this;
        this.getNewState().then(function(){
            here.editDetails(here.props.LabId,here.state.EditedLabName);
        })
        alert("edit success");
    }

    onDelete = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    
        this.deleteDetails(this.props.LabId)
        
        alert("successfully Deleted");
    }

    render(){
        return  (
            <tr key={this.props.LabId}>
            <td style={{paddingLeft:"50Px"}}>{this.props.LabId}</td>
            <td style={{paddingLeft: "50px"}}>{this.props.LabName}</td>
            <td style={{paddingLeft:"50Px"}}>{this.props.LabType}</td>
            <td style={{paddingLeft: "50px"}}>{this.props.DepartmentName}</td>
            <td style={{paddingLeft:"50Px"}}>{this.props.Count}</td>
            <td style={{paddingLeft: "50px"}}>{this.props.InCharge}</td>
            <td style={{paddingLeft:"50Px"}}>{this.props.Location}</td>
            <td style={{paddingLeft: "50px"}}>{this.props.Email}</td>
            <td style={{paddingLeft:"50Px"}}>{this.props.Phone}</td>

            <td>
                <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target={`#myModel${this.props.LabId}`} >Manage</button>
                
                    
                    <div id={`myModel${this.props.LabId}`} className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                    <div className="modal-dialog">

                      <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Manage Lab  Details</h4>
                        </div>
                        <div className="modal-body">
                            <div className="container" style={{align:"center"}}>
                                 <form onSubmit={event => this.onEdit(event)}>
                                 <h1>Edit Labs</h1>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>LabID</td>
                                                <td><input type="text" defaultValue={this.state.labs.LabId} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>LabName</td>
                                                <td><input type="text" onChange={event=>this.onNameChange(event)} defaultValue={this.state.labs.LabName}/></td>
                                            </tr>
                                            <tr>
                                                <td>LabType</td>
                                                <td><input type="text" defaultValue={this.state.labs.LabType} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>DepartmentName</td>
                                                <td><input type="text" defaultValue={this.state.labs.DepartmentName} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>Count</td>
                                                <td><input type="text" defaultValue={this.state.labs.Count} disabled /></td>
                                            </tr>
                                            <tr>
                                                <td>Incharge</td>
                                                <td><input type="text" defaultValue={this.state.labs.InCharge} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td><input type="text" defaultValue={this.state.labs.Location} disabled /></td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td><input type="text" defaultValue={this.state.labs.Email} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>Phone</td>
                                                <td><input type="text" defaultValue={this.state.labs.Phone} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="submit"  className="btn btn-primary" onClick={this.onEdit} value="Edit"/>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                 </form>
                                 <div className="container"></div>
                                 <form onSubmit = {event => this.onDelete(event)}>
                                 <h1>Delete Labs</h1>
                                 <table>
                                     <tbody>
                                         <tr>
                                         <td>Lab ID</td>
                                        <td><input type="text" onChange defaultValue={this.props.LabId} disabled/></td>
                                         </tr>
                                         <tr>
                                                <td><input type="submit" className="btn btn-danger"  onClick={event => this.onDelete(event)} value="Delete"/></td>
                                        </tr>
                                     </tbody>
                                 </table>
                                     
                                 </form>
                            
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"  className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                        </div>

                    </div>
                    </div>
         </td>
        </tr>
        );
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
    editDetails(id,EditedLabName) {
        axios.put('http://localhost:3001/Laboratory/labs/' + id ,EditedLabName);       
        
    }

    deleteDetails(id) {
        axios.delete('http://localhost:3001/Laboratory/labs/' + id);
    
    }
}