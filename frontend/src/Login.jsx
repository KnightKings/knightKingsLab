import React, {Component} from 'react';
import Header from './raw/Header'
import Footer from './raw/footer'

export default class Login extends Component{

    constructor(props){
        super(props)
       this.state = {
            loginStatus:{ loggedIn : false , logOut : true},
            ErrorStatus : false,
            SuccessStatus : false,
        }
    }

    authenticate = event => {
        event.preventDefault();
        event.stopPropagation()
        let h =this;
        var name = document.forms["myForm"]["name"].value;
        var pass = document.forms["myForm"]["pass"].value;

        if (name === "" && pass === "") {
           alert(" One or more fields are empty ");
           
        }else{
            if(name === "Admin" && pass === "123"){
                
                 alert(" Login successfully ");
                   h.props.history.push('/menu') 
            }else{
                alert("User Name or passwrd incorrect ");
            }
        }
    }

    render(){
        return <div  style={{color:"black"}}>
            <Header />
            <div className="container col-md-4" style={{margin: "120px 0px 0px 30%",
                                                        border:"3px solid #1976d2",
                                                        padding:"35px",
                                                        borderRadius:"25px",
                                                        backgroundColor:"#FFF",
                                                        opacity:"0.9"}}>
                                                       

                <form name="myForm" onSubmit={event=>this.authenticate(event)}>
                    <div className="from-group">
                        <label>User Name :</label>
                        <div style={{padding:"5px"}}>
                            <input className="form-control" name="name"  type="text" placeholder="Enter user name" required/>
                        </div>
                    </div>

                    <div className="from-group">
                        <label>Password :</label>
                        <div style={{padding:"5px"}}>
                            <input className="form-control" name="pass"  type="password" placeholder="Enter user password" required/>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.authenticate} data-toggle="modal" data-target="#myModal">login</button>
                </form>

            </div>
            <Footer/>
        </div>
    }

}