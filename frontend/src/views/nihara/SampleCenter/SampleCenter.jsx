import React, { Component } from 'react';
import Managesamplecenter from './SampleCenterManage'
import axios from 'axios'
import AddSampleCenter from './AddSampleCenter'

// component for a sample center
export default class SampleCenter extends Component {

    constructor(props){
        super(props)
        this.state = {
            samplecenters : [],


        }
    }


    componentWillMount(){
        this.getAllSampleCenterTypes()
        console.log(this.state.samplecenters)
    }

    render(){



        return <div>

            {/*insert sample center button component*/}
            <AddSampleCenter/>

            <div className="container col-md-12">

                {/*sample center table*/}
                <table className="table" style={{ padding:"10px"}}>
                    <thead>
                    <tr>


                        <th>Sample Center Type</th>
                        <th>Sample Center Name</th>
                        <th>InCharge</th>
                        <th>Location</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>


                    {/*mapping data from the backend to the sample center table*/}
                    {
                        this.state.samplecenters.map(samplecenter => {
                            return (
                                <tr key={samplecenter.SampleCenter}>

                                    <td style={{paddingLeft:"50Px"}}>{samplecenter.SampleCenterType}</td>
                                    <td style={{paddingLeft: "50px"}}>{samplecenter.SampleCenterName}</td>
                                    <td style={{paddingLeft:"50Px"}}>{samplecenter.InCharge}</td>
                                    <td style={{paddingLeft: "50px"}}>{samplecenter.Location}</td>
                                    <td style={{paddingLeft:"50Px"}}>{samplecenter.Email}</td>
                                    <td style={{paddingLeft: "50px"}}>{samplecenter.Phone}</td>
                                    {/*<td><ManageSampleCenter samplecenter={samplecenter} id={}/></td>*/}

                                    <td><Managesamplecenter SampleCenterType={samplecenter.SampleCenterType} SampleCenterName = {samplecenter.SampleCenterName} InCharge={samplecenter.InCharge} Location = {samplecenter.Location} Email ={samplecenter.Email}  Phone = {samplecenter.Phone} /></td>

                                </tr>
                            );
                        })
                    }

                    </tbody>
                </table>
            </div>
        </div>
    }

    // getting all the data from sample center table
    getAllSampleCenterTypes() {
        axios.get('http://localhost:3001/Laboratory/SampleCenter')
            .then(function (res) {
                let samplecenters = res.data.data;
                this.setState({samplecenters});
                console.log(samplecenters);
            }.bind(this)).catch(function(err){
            console.log(err);
        });

    }

}