import React, { Component } from 'react';

import Laborder from './LabOrder/LabOrder'



export default class LabTest extends Component {

    constructor(props){
        super(props)
        this.state = {
             
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
                    
                     <Laborder />
                    

                    </div>   
                </div>
            </div>
    }

    
}