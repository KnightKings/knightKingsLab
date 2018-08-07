import React,{Component} from 'react'
import axios from 'axios'

export default class AddNewTest extends Component{

    constructor(props){
        super(props)

        this.state ={
            getCurrentValue : [],
            CategoryVal : [],
            CategorySubVal : []
        }
    }

    componentWillMount(){
        this.getAllCategory();
        this.getAllSubCategory();
    }

    onIdChange(event){
        this.id = event.target.value;
    }

    onNameChange(event){
        this.name = event.target.value;
    }

    onCategoryChange(event){
        this.category = event.target.value;
    }

    onSubCategory(event){
        this.subCategory = event.target.value;
    }

    getNewState= () =>{

        let h =  this; 
        return new Promise(function(resolve){
            h.setState({ getCurrentValue : {
                LabTestId : h.id  ,
                LabTestName : h.name ,
                LabTestCategory: h.category ,
                LabTestSubCategory:  h.subCategory ,   
            } })
            resolve({"message": "success"})
        })
    }

    onAddClick = event=>{
        event.preventDefault();
        event.stopPropagation();
        let self = this;

        this.getNewState().then(function(){
            self.AddTest(self.state.getCurrentValue);
        })


        alert("Test Name Added Successfully");
    }

    render(){
        return <div>
                    <input type="button" data-toggle="modal" data-target="#myModalAD" className="btn btn-primary" value="Add new Test" style={{width: "210px",border: "2px solid #ccc",fontSize: "14px",
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
                                                <label>Test Name : </label>
                                                <input type="text" onChange={event=>this.onNameChange(event)} className="form-control" required/>
                                            </div>
                                            <div className="form-group">
                                                <label>Test Category : </label>
                                                <select className="form-control" onChange={event=>this.onCategoryChange(event)}>
                                                    <option></option>
                                                {
                                                    this.state.CategoryVal.map(Category => {
                                                        return <option key={Category.LabTestCategoryId} value={Category.LabTestCategoryName}>
                                                                {Category.LabTestCategoryName}
                                                            </option>
                                                        
                                                    })
                                                }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Test Sub Category :</label>
                                                <select className="form-control" onChange={event=>this.onSubCategory(event)}>
                                                    <option></option>
                                                {
                                                    this.state.CategorySubVal.map(SubCategory => {
                                                        return <option key={SubCategory.LabTestSubCategoryId} value={SubCategory.LabTestSubCategoryName}>
                                                                {SubCategory.LabTestSubCategoryName }
                                                            </option>
                                                        
                                                    })
                                                }
                                                </select>
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

    AddTest(obj){
        axios.post('http://localhost:3001/Laboratory/LabTest', obj)
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