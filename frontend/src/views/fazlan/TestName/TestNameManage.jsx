import React,{Component} from 'react';
import axios from 'axios';

export default class TestNameManage extends Component{

    constructor(props){
        super(props)
        this.state = {
           value: '',
           EditedTest : {},
           CategoryVal : [],
           CategorySubVal : []
        }

    }

    componentWillMount(){
        this.getAllCategory();
        this.getAllSubCategory();
    }

    onNameChange(event){
        this.name = event.target.value;
        
    }

    getNewState= () =>{
        const self =  this; 
        return new Promise(function(resolve){
            self.setState({EditedTest : 
                {
                    LabTestId: self.props.testId,
                    LabTestName: self.name, 
                    LabTestCategory:  self.props.category,  
                    LabTestSubCategory: self.props.subCategory
                } })
            resolve({"message": "success"})
        })
    }

   

    onEdit= (event)=>{
        event.preventDefault();
        event.stopPropagation();
      
        const self = this; 
        this.getNewState().then(function(){
            self.editDetails(self.props.testId,self.state.EditedTest);
        })

        alert("successfully edited");
    }

    onDelete = (event)=>{
        event.preventDefault();
        event.stopPropagation();

        this.deleteDetails(this.props.testId)

        alert("successfully deleted");
    }

    render(){
        return  (
            <div>
                <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target={`#myModal${this.props.testId}`}>Manage</button>
                    
                    <div id={`myModal${this.props.testId}`} className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                        <div className="modal-dialog">

                            <div className="modal-content" style={{border:"5px solid #1565c0",borderRadius:"9px",marginTop:"50px"}}>
                            <div className="modal-header" style={{backgroundColor:"#1565c0" ,color:"#FFF"}}>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Manage Test Details</h4>
                            </div>

                            <div className="modal-body">
                                <div className="container" style={{align:"center"}}>
                                    <form onSubmit={event => this.onEdit(event)}>
                                    <h1>Edit Test</h1>
                                        <table>
                                            <tbody>
                                                
                                                <tr style ={{padding:"100px"}}>
                                                    <td>test ID</td>
                                                    <td style={{padding:"10px"}}><input type="text" className="form-control" defaultValue={this.props.testId} disabled/></td>
                                                </tr>
                                                <tr>
                                                    <td>Test Category</td>
                                                    <td style={{padding:"10px"}}>
                                                        <input type="text" className="form-control" defaultValue={this.props.category} disabled/>
                                                    </td>
                                            
                                                </tr>
                                                <tr>
                                                    <td>Test Sub Category</td>
                                                    <td style={{padding:"10px"}}>
                                                        
                                                    <input type="text" className="form-control"  defaultValue={this.props.subCategory} disabled/>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <td>Test Name</td>
                                                    <td style={{padding:"10px"}}><input type="text" className="form-control" onChange={event=>this.onNameChange(event)} defaultValue={this.props.name}/></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="submit"  className="btn btn-primary col-md-12" onClick={this.onEdit} value="Edit"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                        
                                        <div className="container"></div>
                                        <form onSubmit = {event => this.onDelete(event)}>
                                            <h1>Delete Test</h1>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td style={{width:"38%"}}>test ID</td>
                                                        <td style={{padding:"10px"}}><input type="text" className="form-control"  defaultValue={this.props.testId} disabled/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="submit" className="btn btn-primary col-md-12"  onClick={this.onDelete} value="Delete"/></td>
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

            </div>
        );
    }

    editDetails(id,EditedTest){
        axios.put('http://localhost:3001/Laboratory/LabTest/' + id , EditedTest);
    }

    deleteDetails(id){
        axios.delete('http://localhost:3001/Laboratory/LabTest/' + id);   
    }

    getAllCategory=()=>{
        axios.get('http://localhost:3001/Laboratory/LabTestCategory').then(function(res){
            let CategoryVal = res.data.data;
            this.setState({CategoryVal});
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

    getAllSubCategory=()=>{
        axios.get('http://localhost:3001/Laboratory/LabTestSubCategory').then(function(res){
            let CategorySubVal = res.data.data;
            this.setState({CategorySubVal});
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

}