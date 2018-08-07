import React,{Component} from 'react'
import axios from 'axios'

export default class AddLab extends Component{

    constructor(props){
        super(props)

        this.state ={
            getCurrentValue : [],
            labTypes:[],
            departments:[]
        }
    }

    componentWillMount(){
        this.getAllLabTypes();
        this.getAllDepartments();
    }

    onIdChange(event){
        this.id = event.target.value;
    }

    onNameChange(event){
        this.name = event.target.value;
    }

    onTypeChange(event){
        this.type = event.target.value;
    }

    onDepartmentChange(event){
        this.department = event.target.value;
    }
    onCountChange(event){
        this.count = event.target.value;
    }

    onLabInchargeChange(event){
        this.inCharge = event.target.value;
    }

    onLocationChange(event){
        this.location = event.target.value;
    }

    onEmailChange(event){
        this.email = event.target.value;
    }
    onPhoneChange(event){
        this.phone = event.target.value;
    }

    getNewState= () =>{

        let h =  this; 
        return new Promise(function(resolve){
            h.setState({ getCurrentValue : {
                LabId : h.id  ,
                LabName : h.name, 
                LabType : h.type,
                DepartmentName: h.department,
                Count : h.count,
                InCharge: h.inCharge,
                Location : h.location,
                Email : h.email,
               Phone : h.phone   
            } })
            resolve({"message": "success"})
        })
    }

    onAddClick = event=>{
        event.preventDefault();
        event.stopPropagation();
        let self = this;

        //alert( this.id +" "+this.name+" ");

        this.getNewState().then(function(){
            //console.log(self.state.getCurrentValue);
            self.AddTest(self.state.getCurrentValue);
        })
        alert("Lab Added SuccessFully");
    }

    render(){
        return <div>
                    <input type="button" data-toggle="modal" data-target="#myModalA" className="btn btn-primary" value="Add Lab" style={{width: "153px",border: "2px solid #ccc",fontSize: "14px",
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
                                                <label >LabID :</label>
                                                <input type="text" onChange={event=>this.onIdChange(event)} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Lab Name : </label>
                                                <input type="text" onChange={event=>this.onNameChange(event)} className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label >Lab Type :</label>
                                                {/* <input type="text" onChange={event=>this.onTypeChange(event)} className="form-control" /> */}
                                                <select className="form-control" onChange={event=>this.onTypeChange(event)} >
                                                    <option></option>
                                                    {
                                                        this.state.labTypes.map(labtype => {
                                                            //console.log(labtype);
                                                            return <option key={labtype.LabId} value={labtype.LabTypeName}>{labtype.LabTypeName}</option>

                                                        })
                                                    }
                                                </select>

                                            </div>
                                            <div className="form-group">
                                                <label>Lab Department : </label>
                                                {/* <input type="text" onChange={event=>this.onDepartmentChange(event)} className="form-control"/> */}
                                                <select className="form-control" onChange={event=>this.onDepartmentChange(event)} >
                                                    <option></option>{
                                                    this.state.departments.map(department => {
                                                        return (
                                                            <option key = {department.DepartmentId} value={department.DepartmentName}>{department.DepartmentName}</option>
                                                        );
                                                    })
                                                }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label >Lab Count :</label>
                                                <input type="text" onChange={event=>this.onCountChange(event)} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Lab InCharge : </label>
                                                <input type="text" onChange={event=>this.onLabInchargeChange(event)} className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label >Location :</label>
                                                <input type="text" onChange={event=>this.onLocationChange(event)} className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Email : </label>
                                                <input type="text" onChange={event=>this.onEmailChange(event)} className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label >Phone :</label>
                                                <input type="text" onChange={event=>this.onPhoneChange(event)} className="form-control" />
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
        axios.post('http://localhost:3001/Laboratory/labs', obj)
    }

    getAllLabTypes() {
        axios.get('http://localhost:3001/Laboratory/labtypes')
            .then(function (res) {
                let labTypes = res.data;
                this.setState({labTypes});
            }.bind(this)).catch(function(err){
                console.log(err);
            });
        
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
    
}