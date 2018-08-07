import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="col-md-12 " 
      style={{position: "fixed",
        left: "0",
        bottom: "0",
        height:"25px",
        width: "100%",
        backgroundColor: "#1565c0",
        textAlign: "center",
        color:"#FFF"}}>

        <span style={{fontSize:"0.7em"}}>Copyright &#169; 2014-2015 SLIIT HIS. All rights reserved.</span>
        
      </div>
    );
  }
}

export default Footer;