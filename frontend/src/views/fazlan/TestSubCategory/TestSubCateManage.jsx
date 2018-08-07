import React,{Component} from 'react';
import axios from 'axios';

export default class TestCateManage extends Component{

    constructor(props){
        super(props)
        this.state = {
           value: '',
           EditedTest : {},
           CategoryVal : []
        }
    }

    componentWillMount(){
        this.getAllSubCategory();
    }

    onSubCategoryChange(event){
        this.name = event.target.value;
        
    }

   SetNewState= () =>{
        const self =  this; 
        return new Promise(function(resolve){
            self.setState({EditedTest : 
                {
                    LabTestSubCategoryId : self.props.testId,
                    LabTestSubCategoryName: self.name, 
                } })
            resolve({"message": "success"})
        })
    }

    onEdit= (event)=>{
        event.preventDefault();
        event.stopPropagation();
        
        console.log(this.props.testId);

        const self = this; 
        this.SetNewState().then(function(){
            console.log(self.state.EditedTest);
            self.editDetails(self.props.testId, self.state.EditedTest);
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

                            <div className="modal-content" style={{border:"5px solid #1565c0",borderRadius:"9px",marginTop:"90px"}}>
                            <div className="modal-header" style={{backgroundColor:"#1565c0" ,color:"#FFF"}}>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Manage Test Sub Category</h4>
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
                                                    <td>Test Sub Category</td>
                                                    <td style={{padding:"10px"}}><input type="text" className="form-control" onChange={event=>this.onSubCategoryChange(event)} defaultValue={this.props.name}/></td>
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
                                            <h1>Delete Test</h1>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>test ID</td>
                                                        <td><input type="text"  defaultValue={this.props.testId} disabled/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><input type="submit" className="btn btn-danger"  onClick={this.onDelete} value="Delete"/></td>
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
        axios.put('http://localhost:3001/Laboratory/LabTestSubCategory/' + id , EditedTest);
    }

    deleteDetails(id){
        axios.delete('http://localhost:3001/Laboratory/LabTestSubCategory/' + id);   
    }

    getAllSubCategory=()=>{
        axios.get('http://localhost:3001/Laboratory/LabTestSubCategory').then(function(res){
            let CategoryVal = res.data.data;
            this.setState({CategoryVal});
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

}