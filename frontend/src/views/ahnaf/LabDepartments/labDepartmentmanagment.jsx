import React,{Component} from 'react';
import axios from 'axios'

export default class LabTypemanagment extends Component{

    constructor(props){
        super(props)
        this.state = {
            departments: this.props.department,
            departments: this.props.departmentName,
           value: '',
           EditedDepartmentName : {},
           CurrentValues : []
        }

    }

    getDerivedStateFromProps() {
        this.setState({departmentId : this.props.DepartmentId,departmentName: this.props.DepartmentName});
    }

    componentWillMount(){
        this.getAllDepartments()
    } 

    onNameChange(event){
        this.name = event.target.value;
    }

    getNewState = () =>{
        const here1 = this;
        return new Promise(function(resolve){
            here1.setState({  EditedDepartmentName :
        {
            DepartmentId: here1.props.DepartmentId,
            DepartmentName : here1.name
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
            here.editDetails(here.props.DepartmentId,here.state.EditedDepartmentName);
        })
        alert("edit success");
    }

    onDelete = (event)=>{
        event.preventDefault();
        event.stopPropagation();
    
        this.deleteDetails(this.props.DepartmentId)
        
        alert("successfully Deleted");
    }



    render(){
        return  (
           <tr key={this.props.DepartmentId}>
           <td style={{paddingLeft:"50Px"}}>{this.props.DepartmentId}</td>
            <td style={{paddingLeft: "50px"}}>{this.props.DepartmentName}</td>
            <td>
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target={`#myModel${this.props.DepartmentId}`} >Manage</button>
                
                    
                <div id={`myModel${this.props.DepartmentId}`} className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                <div className="modal-dialog">

                  
                    <div className="modal-content">
                    <div className="modal-header">

                <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Manage LabDepartment Details</h4>
                    </div>
                    <div className="modal-body">
                        <div className="container" style={{align:"center"}}>
                                <form onSubmit={event => this.onEdit(event)}>
                                <h1>Edit Lab Department</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>DepartmentID</td>
                                            <td><input type="text"  onChange defaultValue={this.props.DepartmentId} disabled/></td>
                                        </tr>
                                        <tr>
                                            <td>Department Name</td>
                                            <td><input type="text"  className="form-control"  onChange={event=>this.onNameChange(event)} defaultValue={this.props.DepartmentName}/></td>
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
                                 <h1>Delete LabType</h1>
                                 <table>
                                     <tbody>
                                         <tr>
                                         <td>LabType ID</td>
                                        <td><input type="text" onChange defaultValue={this.props.DepartmentId} disabled/></td>
                                         </tr>
                                         <tr>
                                                <td><input type="submit" className="btn btn-danger"  onClick={event => this.onDelete(event)} value="Delete"/></td>
                                        </tr>
                                     </tbody>
                                 </table>
                                     
                                 </form>
                            </div>
                        </div>                        <div className="modal-footer">
                            <button type="button"  className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                        </div>

                    </div>
                    </div>
         </td>
        </tr>
        );
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
    editDetails(id,EditedDepartmentName) {
        axios.put('http://localhost:3001/Laboratory/departments/' + id ,EditedDepartmentName);       
        
    }

    deleteDetails(id) {
        axios.delete('http://localhost:3001/Laboratory/departments/' + id);
    
    }
}
