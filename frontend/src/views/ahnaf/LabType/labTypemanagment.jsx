import React,{Component} from 'react';
import axios from 'axios'

export default class LabTypemanagment extends Component{

    constructor(props){
        super(props)
        this.state = {
            labtypes: this.props.labtype,
            labTypeName: this.props.labTypeName,
           value: '',
           EditedLabType : {},
           CurrentValues : []
        }

        
    }

componentWillMount(){
    this.getAllLabTypes();
}    

onNameChange(event){
    this.name = event.target.value;
}

getNewState = () =>{
    const here1 = this;
    return new Promise(function(resolve){
        here1.setState({  EditedLabType :
    {
        LabTypeId: here1.props.LabTypeId,
        LabTypeName : here1.name
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
        here.editDetails(here.props.LabTypeId,here.state.EditedLabType);
    })
    alert("edit success");
}

onDelete = (event)=>{
    event.preventDefault();
    event.stopPropagation();

        console.log(this.props.LabTypeId)
    this.deleteDetails(this.props.LabTypeId)
    
    alert("successfully Deleted");
}
    alerT(event){
        alert("sdfsd")
        // this.setState({LabTypeId : this.props.LabTypeId,LabTypeName: this.props.LabTypeName});
        console.log(this.props.LabTypeId);
    }

    getDerivedStateFromProps() {
        this.setState({labTypeId : this.props.LabTypeId,labTypeName: this.props.LabTypeName});
    }

    render(){
        return  (
            <tr key={this.props.LabTypeId}>
            <td style={{paddingLeft:"50Px"}}>{this.props.LabTypeId}</td>
            <td style={{paddingLeft: "50px"}}>{this.props.LabTypeName}</td>
            <td>
                <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target={`#myModel${this.props.LabTypeId}`} >Manage</button>
                
                    
                    <div id={`myModel${this.props.LabTypeId}`} className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                    <div className="modal-dialog">

                      
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Manage LabType  Details</h4>
                        </div>
                        <div className="modal-body">
                            <div className="container" style={{align:"center"}}>
                                 <form onSubmit={event => this.onEdit(event)}>
                                 <h1>Edit LabType</h1>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>LabTypeID</td>
                                                <td><input type="text" className="form-control" defaultValue={this.props.LabTypeId} disabled/></td>
                                            </tr>
                                            <tr>
                                                <td>LabType Name</td>
                                                <td><input type="text"  className="form-control"  onChange={event=>this.onNameChange(event)} defaultValue={this.props.LabTypeName}/></td>
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
                                        <td><input type="text" onChange defaultValue={this.props.LabTypeId} disabled/></td>
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
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                        </div>

                    </div>
                    </div>
         </td>
        </tr>
        );
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

    editDetails(id,EditedLabType) {
        axios.put('http://localhost:3001/Laboratory/labtypes/' + id ,EditedLabType);       
        
    }

    deleteDetails(id) {
        axios.delete('http://localhost:3001/Laboratory/labtypes/' + id);
    
    }


}