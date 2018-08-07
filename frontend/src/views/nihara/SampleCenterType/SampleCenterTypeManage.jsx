import React,{Component} from 'react';
import axios from 'axios';
//sample center type management component (for edit and delete)
export default class SampleCenterTypeManage extends Component{

    constructor(props){
        super(props)
        this.state = {
            samplecentertypes : [],
            value: '',
            NewSampleCenterType :{}
        }

    }

    onSampleCenterTypeChange(event){
        this.SampleCenterType = event.target.value;
    }

    onSampleCenterDescriptionChange(event){

        this.SampleCenterDescription =event.target.value;
    }

    formUpdateSub(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({NewSampleCenterType : { SampleCenterType: this.SampleCenterType, SampleCenterDescription : this.SampleCenterDescription }})

        this.UpdateSampleCenterType(this.SampleCenterType, this.state.NewSampleCenterType)
    }



    formDeleteSub(event){
        event.preventDefault();
        event.stopPropagation();

        this.deleteSampleCenterType(this.SampleCenterType).then(function () {
            this.getAllSampleCenterTypes();
        });
    }


    //rendering the selected row for update/ delete options
    render(){
        return  (
            <div>
                <button type="button"  className="btn btn-primary btn-md" data-toggle="modal" data-target={`#myModal1${this.props.SampleCenterType}`}>Manage</button>

                <div id={`myModal1${this.props.SampleCenterType}`}  className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                    <div className="modal-dialog">


                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Manage Sample Center Types</h4>
                            </div>
                            <div className="modal-body">
                                <div className="container" style={{align:"center"}}>
                                    <form>
                                        <table>
                                            {/*data of the selected record*/}
                                            <tbody>
                                            <tr>
                                                <td>Sample Center Type</td>
                                                <td><input type="text" defaultValue={this.props.SampleCenterType
                                                } onChange={event=>this.onSampleCenterTypeChange(event)}/></td>
                                            </tr>
                                            <tr>
                                                <td>SampleCenter Type Description </td>
                                                <td><input type="text" defaultValue={this.props.SampleCenterDescription} onChange={event=>this.onSampleCenterDescriptionChange(event)}/></td>
                                            </tr>

                                            {/*update and delete buttons*/}
                                            <tr>
                                                <td><input type="button" className="btn btn-primary" value="Edit"/></td>

                                            </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </div>
                            </div>

                            <div>
                                <h1>Delete Sample center Type</h1>
                                <form onSubmit={event=>this.formDeleteSub(event)}>
                                    <tr>
                                        <td><label>Sample center Name:</label></td>
                                        <td><input type="text" onChange={event=> this.onSampleCenterTypeChange(event)} required/> </td>
                                    </tr>
                                    <input type="submit" value="Delete"/>
                                </form>
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

    deleteSampleCenterType(samplecentertype){
        return new Promise(function (resolve , reject){
            axios.delete('http://localhost:3001/Laboratory/SampleCenterType/' + samplecentertype)
                .then(function (res) {
                }).catch(function(err){
                console.log(err);
            });
        })
    }

    // getting all the data from sample center table
    getAllSampleCenterTypes() {
        axios.get('http://localhost:3001/Laboratory/SampleCenterType')
            .then(function (res) {
                let samplecentertypes = res.data.data;
                this.setState({samplecentertypes});
                console.log(samplecentertypes);
            }.bind(this)).catch(function(err){
            console.log(err);
        });

    }

    //update
    UpdateSampleCenterType(SampleCenterName,obj){
        axios.put('http://localhost:3001/Laboratory/SampleCenterType/'+ SampleCenterName,obj).then(function (res) {
        }).catch(function (err) {
            console.log(err);
        })
    }
}