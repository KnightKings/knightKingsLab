import React,{Component} from 'react'
import axios from 'axios'

export default class AddNewTestCategory extends Component{

    constructor(props){
        super(props)

        this.state ={
            getCurrentValue : [],
            CategorySubVal : []
        }
    }

    onIdChange(event){
        this.id = event.target.value;
    }

    onNameChange(event){
        this.name = event.target.value;
    }


    getNewState= () =>{

        let h =  this; 
        return new Promise(function(resolve){
            h.setState({ getCurrentValue : {
                LabTestCategoryId : h.id  ,
                LabTestCategoryName : h.name   
            } })
            resolve({"message": "success"})
        })
    }

    onAddClick = event=>{
        event.preventDefault();
        event.stopPropagation();
        let self = this;

        console.log(this.name)

        this.getNewState().then(function(){
            self.AddCategory(self.state.getCurrentValue);
        })

        alert("Test Name Added Successfully");
    }

    render(){
        return <div>
                    <input type="button" data-toggle="modal" data-target="#myModalAD" className="btn btn-primary" value="Add new Category" style={{width: "210px",border: "2px solid #ccc",fontSize: "14px",
                                                                                                padding: "10px 20px 10px 20px",
                                                                                                margin:"20px 0px 20px 0px"}}/>

                        <div id="myModalAD" className="modal fade" role="dialog" data-backdrop="false">
                            <div className="modal-dialog" >

                                <div className="modal-content" style={{border:"5px solid #1565c0",borderRadius:"9px",marginTop:"90px"}}>
                                    <div className="modal-header" style={{backgroundColor:"#1565c0" ,color:"#FFF"}}>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Add New Test</h4>
                                    </div>
                                    
                                    <div className="modal-body">
                                        <center>
                                        <form className="col-md-12" onSubmit={event=>this.onAddClick(event)}>
                                            <div className="form-group">
                                                <label >ID :</label>
                                                <input type="number" onChange={event=>this.onIdChange(event)} className="form-control" required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Test Category : </label>
                                                <input type="text" onChange={event=>this.onNameChange(event)} className="form-control" required/>
                                            </div>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </form>
                                        </center>
                                        
                                    </div>

                                    <div className="modal-footer ">
                                        <button type="button" className="btn" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                                                        
                            </div>
                        </div>

            </div>
    }

    AddCategory(obj){
        axios.post('http://localhost:3001/Laboratory/LabTestCategory', obj)
    }

}