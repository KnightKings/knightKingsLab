import React from 'react'
import {NavLink, Link} from 'react-router-dom'



export default function() {    
    return (
        <div className="col-md-2 vertical-menu" >
            <NavLink to="LabOrder"  activeStyle={{backgroundColor:"#1976d2",color:"#FFF"}}> Lab orders</NavLink>
            <NavLink to="LabTest"  activeStyle={{backgroundColor:"#1976d2",color:"#FFF"}}>Lab Test Manager</NavLink>
            <NavLink to="LaboratoryManager"  activeStyle={{backgroundColor:"#1976d2",color:"#FFF"}}>Laboratory Manager</NavLink>
            <NavLink to="SampleCenterManager" activeStyle={{backgroundColor:"#1976d2",color:"#FFF"}}>Sample Center Manager</NavLink>

            <Link to="/"><div className="btn btn-primary" style={{   height:"35px",
                                                        width:"100px",
                                                        borderRadius:"20px",
                                                        margin:"250px 0px 0px 40px",
                                                        position: "fixed",
                                                        zIndex: "99",
                                                        cursor: "pointer"
                                                    }}>Logout</div></Link>
        </div>
    );
}