import React,{Component} from 'react';
import axios from 'axios';
import SampleCenterType from "../SampleCenterType/SampleCenterType";
//component for editing and deleting a samplecenter
export default class SampleCenterManage extends Component{

    constructor(props){
        super(props)
        this.state = {
            samplecenters : [],
            value: '',
            NewSampleCenter : {}
        }

    }

    componentwillmount(){
        console.log(this.props.SampleCenterType);

    }

    onNameChange(event){
        this.name = event.target.value;
    }

    //UPDATE
    onSampleCenterTypeChange(event){
        this.SampleCenterType = event.target.value;
    }

    onSampleCenterNameChange(event){
        this.SampleCenterName = event.target.value;
    }

    onInChargeChange(event){
        this.InCharge = event.target.value;
    }

    onLocationChange(event){
        this.Location = event.target.value;
    }

    onEmailChange(event){
        this.Email = event.target.value;
    }

    onPhone(event){
        this.Phone = event.target.value;
    }

    formUpdateSub(event){
        event.stopPropagation();
        //event.preventDefault();

        this.setState({ NewSampleCenter : {SampleCenterType:this.SampleCenterType, SampleCenterName:this.SampleCenterName, InCharge:this.InCharge, Location:this.Location, Phone:this.Phone, Email:this.Email}})

        console.log(this.SampleCenterName)
        console.log(this.Phone)

        this.UpdateSampleCenter(this.SampleCenterName, this.state.NewSampleCenter)
    }

    formDeleteSub(event){
        event.preventDefault();
        event.stopPropagation();

        this.deleteSampleCenter(this.name).then(function () {
            this.getAllSampleCenters();
        });
    }



    render(){
        return  (
            <div>
                <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target={`#myModal${this.props.Phone}`}>Manage</button>

                <div id={`myModal${this.props.Phone}`} className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Manage Sample Centers</h4>
                            </div>
                            <div className="modal-body">
                                <div className="container" style={{align:"center"}}>
                                    <form onSubmit={event=> this.formUpdateSub(event)}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Sample Center Type</td>
                                                <td><input type="text" defaultValue={this.props.SampleCenterType} onChange={event=>this.onSampleCenterTypeChange(event)}/></td>
                                            </tr>
                                            <tr>
                                                <td>Sample Center Name</td>
                                                <td><input type="text" defaultValue={this.props.SampleCenterName} onChange={event=>this.onSampleCenterNameChange(event)}/></td>
                                            </tr>

                                            <tr>
                                                <td>InCharge</td>
                                                <td><input type="text" defaultValue={this.props.InCharge} onChange={event=>this.onInChargeChange(event)}/></td>
                                            </tr>

                                            <tr>
                                                <td>Location</td>
                                                <td><input type="text" defaultValue={this.props.Location} onChange={event=>this.onLocationChange(event)}/></td>
                                            </tr>

                                            <tr>
                                                <td>Email</td>
                                                <td><input type="text" defaultValue={this.props.Email} onChange={event=>this.onEmailChange(event)}/></td>
                                            </tr>

                                            <tr>
                                                <td>Phone</td>
                                                <td><input type="text" defaultValue={this.props.Phone} onChange={event=>this.onPhone(event)}/></td>
                                            </tr>

                                            <tr>
                                                <td><input type="button" className="btn btn-primary" value="Update"/>
                                                    </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>

                                <div>
                                    <h1>Delete Sample center</h1>
                                    <form onSubmit={event=>this.formDeleteSub(event)}>
                                        <tr>
                                            <td><label>Sample center Name:</label></td>
                                            <td><input type="text" onChange={event=> this.onNameChange(event)} required/> </td>
                                        </tr>
                                        <input type="submit" value="Delete"/>
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

    deleteSampleCenter(name){
        return new Promise(function (resolve , reject){
            axios.delete('http://localhost:3001/Laboratory/SampleCenter/' + name)
                .then(function (res) {
                }).catch(function(err){
                console.log(err);
            });
        })
    }

    // getting all the data from sample center table
    getAllSampleCenters() {
        axios.get('http://localhost:3001/Laboratory/SampleCenter')
            .then(function (res) {
                let samplecenters = res.data.data;
                this.setState({samplecenters});
                console.log(samplecenters);
            }.bind(this)).catch(function(err){
            console.log(err);
        });

    }

    //update
    UpdateSampleCenter(SampleCenterName,obj){
        axios.put('http://localhost:3001/Laboratory/SampleCenter/'+ SampleCenterName,obj).then(function (res) {
        }).catch(function (err) {
            console.log(err);
        })
    }

}

