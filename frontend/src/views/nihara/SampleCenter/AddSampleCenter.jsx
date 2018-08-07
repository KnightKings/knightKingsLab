import React,{Component} from 'react'
import axios from 'axios'

//component for adding a sample center
export default class AddSampleCenter extends Component{

    constructor(props){
        super(props)

        this.state ={
            getCurrentValue : []
        }
    }

    onSampleCenterTypeChange(event){
        this.samplecentertype = event.target.value;
    }

    onSampleCenterNameChange(event){
        this.samplecentername = event.target.value;
    }

    onInChargeChange(event){
        this.incharge = event.target.value;
    }

    onLocationChange(event){
        this.location = event.target.value;
    }

    onEmailChange(event){
        this.email = event.target.value;
    }

    onPhone(event){
        this.phone = event.target.value;
    }

    getNewState= () =>{

        let h =  this;
        return new Promise(function(resolve){
            h.setState({ getCurrentValue : {
                SampleCenterType : h.samplecentertype,
                SampleCenterName : h.samplecentername ,
                InCharge: h.incharge ,
                Location:  h.location ,
                Email: h.email,
                Phone : h.phone
            } })
            resolve({"message": "success"})
        })
    }

    onAddClick = event=>{
        event.preventDefault();
        event.stopPropagation();
        let self = this;



        this.getNewState().then(function(){
            console.log(self.state.getCurrentValue);
            self.AddSampleCenter(self.state.getCurrentValue);
        })
        alert("Successfully Added to the database");
    }

    render(){
        return <div>
            <input type="button" data-toggle="modal" data-target="#myModal1" className="btn btn-primary" value="Add Sample Center +" style={{width: "153px",border: "2px solid #ccc",fontSize: "14px",
                padding: "10px 180px 10px 20px",
                margin:"20px 0px 20px 0px"}}/>

            <div id="myModal1" className="modal fade" role="dialog" data-backdrop="false">
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add a Sample Center</h4>
                        </div>

                        <div className="modal-body">

                            <form className="col-md-12" onSubmit={event=>this.onAddClick(event)} action="/action_page.php">
                                <div className="form-group">
                                    <label >Sample center Type :</label>
                                    <input type="text" onChange={event=>this.onSampleCenterTypeChange(event)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Sample Center Name : </label>
                                    <input type="text" onChange={event=>this.onSampleCenterNameChange(event)} className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label >InCharge :</label>
                                    <input type="text" onChange={event=>this.onInChargeChange(event)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>location : </label>
                                    <input type="text" onChange={event=>this.onLocationChange(event)} className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label >Email :</label>
                                    <input type="text" onChange={event=>this.onEmailChange(event)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Phone : </label>
                                    <input type="text" onChange={event=>this.onPhone(event)} className="form-control"/>
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

    //inserting a sample center
    AddSampleCenter(obj){
        axios.post('http://localhost:3001/Laboratory/SampleCenter', obj)
    }

}