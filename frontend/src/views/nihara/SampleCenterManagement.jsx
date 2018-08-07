import React, { Component } from 'react';

// importing main components of the sample center management
import SampleCenters from './SampleCenter/SampleCenter'
import SampleCenterTypes from './SampleCenterType/SampleCenterType'


//main management component for sample centers
export default class SampleCenterManagement extends Component {

    constructor(props){
        super(props)
        this.state = {
            // setting the navigations when the sample center management is selected
            activeNavLink : { samplecenter : true , samplecentertypes : false },

            navBarEvent : {activeSampleCenter: "active" ,activesampleCenterType:""},

            samplecenters : []
        }
    }

    // setting states according to the selections
    //sample center selected in navigation
    SampleCenterNavPressed = () =>{
        this.setState({ activeNavLink : {samplecenter : true , samplecentertypes : false }})
        this.setState({ navBarEvent : {activeSampleCenter: "active" ,activesampleCenterType:""}})

    }
    //samplecenter type selected in navigation
    SampleCenterTypesPressed = () =>{
        this.setState({ activeNavLink : {samplecenter : false , samplecentertypes: true }})
        this.setState({ navBarEvent : {activeSampleCenter: "" ,activesampleCenterType:"active"}})
    }

    //rendering the component according to the selection
    renderMainForm=() =>{
        if(this.state.activeNavLink.samplecenter === true ){

            return <SampleCenters AllSampleCenters = {this.state.samplecenters}/>

        }else if(this.state.activeNavLink.samplecentertypes === true){

            return <SampleCenterTypes AllSampleCenters = {this.state.samplecenters}/>

        }
    }
    render() {

        return <div>

            <div style={{color:"black"}}>
                <div className="container col-md-10" style={{
                    margin: "-20px 0px 0px 0px",
                    backgroundColor: "#FFF",
                    opacity: "0.9",
                    height: "700px"
                }} >
                    <ul className="nav nav-tabs">
                        <li className={this.state.navBarEvent.activeSampleCenter}><a onClick={this.SampleCenterNavPressed}>Sample Centers</a></li>
                        <li className={this.state.navBarEvent.activesampleCenterType}><a onClick={this.SampleCenterTypesPressed}>Sample Center Types</a></li>

                    </ul>
                    <center><h3><b>Sample Center Manager</b></h3></center>

                    {
                        // rendering the main form containing the main components of sample center management
                        this.renderMainForm()
                    }
                </div>
            </div>
        </div>
    }


}