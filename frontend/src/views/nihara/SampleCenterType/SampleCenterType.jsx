import React, { Component } from 'react';
import ManageSampleCenterType from './SampleCenterTypeManage'
import axios from 'axios'
import AddSampleCenterType from './AddSampleCenterType'

//sample center type component
export default class SampleCenterType extends Component {

    constructor(props){
        super(props)
        this.state = {
            samplecentertypes : [],
            search: ''
        }
    }

    updateSample(event) {
        this.setState({search:event.target.value.substr(0,20)});
    }

    componentWillMount(){
        this.getAllSampleCenterTypes()
        console.log(this.state.samplecentertypes)
    }

    render(){

        let samples = this.state.samplecentertypes.filter(
            (sample)=> {
                return sample.SampleCenterType.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            })

        return(
            <div>

                {/*insert butotn*/}
                <AddSampleCenterType/>

            {/*search bar*/}
            <div className="container col-md-12">
                <input type="text" placeholder="Search By Sample Center Type" value={this.state.search} onChange={this.updateSample.bind(this)} style={{width: "300px",
                    boxSizing: "border-box",
                    border: "2px solid #ccc",
                    borderRadius:"25px",
                    fontSize: "14px",
                    padding: "10px 30px 10px 20px",
                    transition: "width 0.4s ease-in-out",
                    float:"right",
                    margin:"20px 0px 20px 0px"}}/>

                {/*sample center types table with edit/manage*/}
                <table className="table" style={{ padding:"10px"}}>
                    <thead>
                    <tr>

                        <th>Sample Center Type</th>
                        <th>Sample Center Description</th>
                    </tr>
                    </thead>
                    <tbody>



                        {/*mapping the data in to the sample center type table */}
                        {
                            samples.map(samplecentertype => {
                                return (
                                    <tr key={samplecentertype.SampleCenterType}>

                                        <td style={{paddingLeft:"50Px"}}>{samplecentertype.SampleCenterType}</td>
                                        <td style={{paddingLeft: "50px"}}>{samplecentertype.SampleCenterDescription}</td>
                                        {/*<td><ManageSampleCenterType samplecentertype={samplecentertype}/></td>*/}

                                        <td><ManageSampleCenterType SampleCenterType = {samplecentertype.SampleCenterType} SampleCenterDescription = {samplecentertype.SampleCenterDescription}/></td>

                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
        )
    }

    // get all sample center type method from the backend
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

}