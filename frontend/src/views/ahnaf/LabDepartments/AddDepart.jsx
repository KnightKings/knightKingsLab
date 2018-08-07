import React,{Component} from 'react'
import axios from 'axios'

export default class AddDepart extends Component{

    constructor(props){
        super(props)

        this.state ={
            getCurrentValue : []
        }
    }

    onIdChange(event){
        this.id = event.target.value;
    }

    onNameChange(event){
        this.name = event.target.value;
    }

    // onCategoryChange(event){
    //     this.category = event.target.value;
    // }

    // onSubCategory(event){
    //     this.subCategory = event.target.value;
    // }

    getNewState= () =>{

        let h =  this; 
        return new Promise(function(resolve){
            h.setState({ getCurrentValue : {
                DepartmentId : h.id  ,
                DepartmentName : h.name 
                   
            } })
            resolve({"message": "success"})
        })
    }

    onAddClick = event=>{
        event.preventDefault();
        event.stopPropagation();
        let self = this;

        alert( this.id +" "+this.name+" ");

        this.getNewState().then(function(){
            console.log(self.state.getCurrentValue);
            self.AddTest(self.state.getCurrentValue);
        })
        alert("Department Added SuccessFully");
    }

    render(){
        return <div>
                    <input type="button" data-toggle="modal" data-target="#myModalA" className="btn btn-primary" value="Add Department" style={{width: "153px",border: "2px solid #ccc",fontSize: "14px",
                                                                                                padding: "10px 20px 10px 20px",
                                                                                                margin:"20px 0px 20px 0px"}}/>

                        <div id="myModalA" className="modal fade" role="dialog" data-backdrop="false">
                            <div className="modal-dialog">

                            
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Modal Header</h4>
                                    </div>
                                    
                                    <div className="modal-body">

                                        <form className="col-md-12" onSubmit={event=>this.onAddClick(event)} action="/action_page.php">
                                            <div className="form-group">
                                                <label >Department ID :</label>
                                                <input type="text" onChange={event=>this.onIdChange(event)} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Department Name : </label>
                                                <input type="text" onChange={event=>this.onNameChange(event)} className="form-control"/>
                                            </div>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </form>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                </div>

                            </div>
                        </div>

            </div>
    }

    AddTest(obj){
        axios.post('http://localhost:3001/Laboratory/departments', obj)
    }

}