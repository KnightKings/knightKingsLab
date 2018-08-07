import React, {Component} from 'react';
import axios from 'axios';
import Labordermanage from './LabOrderManage';
import Addneworder from './AddOrder';

export default class LabOrder extends Component{

    constructor(props){
        super(props);
        this.state={
            laborder:[],
            NewLabOrder:{},
            search : ''

        }
    }

    componentWillMount(){
        
        this.getAllLabOrders();
    }

    onidChange(event){
        this.id= event.target.value;

    }

    onpriorityChange(event){
        this.priority= event.target.value;

    }

    onstatusChange(event){
        this.status= event.target.value;
    }

    onpnoChange(event){
        this.pNO= event.target.value;
    }

    ontestNameChange(event){
        this.testName= event.target.value;
    }

    onreqDateChange(event){
        this.reqDate= event.target.value;
    }

    ondueDateChange(event){
        this.dueDate= event.target.value;
    }

    onpTYpeChange(event){
        this.ptype= event.target.value;
    }

    onreqPersonChange(event){
        this.reqPerson= event.target.value;
    }

    oncomChange(event){
        this.com= event.target.value;
    }

    formSub(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({ NewLabOrder : {requestId:this.id,priority : this.priority , status: this.status,pNO:this.pNO,testName:this.testName,reqDate:this.reqDate,dueDate:this.dueDate,ptype:this.ptype,reqPerson:this.reqPerson,com:this.com }});
       
        this.insertLabOrder(this.state.NewLabOrder)

    }

    formUpdateSub(event){
        event.preventDefault();
        event.stopPropagation();

        this.setState({ NewLabOrder : {priority : this.priority , status: this.status,pNO:this.pNO,testName:this.testName,reqDate:this.reqDate,dueDate:this.dueDate,ptype:this.pType,reqPerson:this.reqPerson,com:this.com }});
       
        this.updateLabOrder(this.id,this.state.NewLabOrder)
    }

    

    formDeleteSub(event){
        event.preventDefault();
        event.stopPropagation();
       
        this.deleteLabOrder(this.id).then(function(){
            this.getAllLabOrders();
        });
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    render(){

     let testName = this.state.laborder.filter(
            (lab)=>{
                return lab.testName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )

        return <div>

         <Addneworder/>

        <div className="container col-md-12">
                    <input type="text" placeholder="Search By Test Name" style={{width: "300px",
                                                boxSizing: "border-box",
                                                border: "2px solid #ccc",
                                                borderRadius:"25px",
                                                fontSize: "14px",
                                                padding: "10px 20px 10px 20px",
                                                transition: "width 0.4s ease-in-out",
                                                float:"right",
                                                margin:"20px 0px 20px 0px"}}value={this.state.search} onChange={this.updateSearch.bind(this)}/> </div>

            <div align="center" style={{ color:"black" }}>
           <center>
               <h1><b>Order Management Menu</b></h1><br/><br/>
           </center>

            <table className="table"  style={{ padding:"10px"}}>
                <thead>
                <tr>
                    <th> Request Id</th>
                    <th> Priority</th>
                    <th>Status </th>
                    <th>Patient Number</th>
                    <th>Test Name</th>
                    <th>Request Date</th>
                    <th>Due Date </th>
                    <th>Patient Type </th>
                    <th>Request Person </th>
                    <th>Comments </th>
                </tr>
                </thead>
         <tbody>
                {
                    this.state.laborder.map(function(laborder)  {
                        return (
                            <tr key={laborder.requestId}>
                            <td style={{paddingLeft:"10Px"}}>{laborder.requestId}</td>
                                <td style={{paddingLeft:"10Px"}}>{laborder.priority}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.status}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.pNO}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.testName}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.reqDate}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.dueDate}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.ptype}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.reqPerson}</td>
                                <td style={{paddingLeft: "10px"}}>{laborder.com}</td>
                              {/* <td><Labordermanage laborder={laborder}/></td>*/}
                               <td><Labordermanage requestId={laborder.requestId}
                               priority={laborder.priority} status={laborder.status} pNO={laborder.pNO} testName={laborder.testName}
                               reqDate={laborder.reqDate} dueDate={laborder.dueDate} ptype={laborder.ptype} reqPerson={laborder.reqPerson}
                               com={laborder.com}/></td>
                                
                                {/* <AddToCart price={food.price} quantity={this.state.qty}
                                           calculateVal={price => this.calPrice()}/> */}
                            </tr>
                        );
                    })
                }
                    {/* <tr>
                       // <td colSpan="4"><button data-target="#Model" onClick={this.name}>Order Details</button></td>
                    </tr> */}
                </tbody>
            </table>
            
          {/*  <div>
                <hr/>
                <h1 style={{color : "black"}}>Input form</h1>
                <form onSubmit={event=>this.formSub(event)}>
                   <tr> <td><label>Request ID:</label></td>
                    <td><input type="text" onChange={event=>this.onidChange(event)} required/></td>
                    </tr>
                   <tr> <td><label>Priority:</label></td>
                    <td><input type="text" onChange={event=>this.onpriorityChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Status:</label></td>
                    <td><input type="text"  onChange={event=>this.onstatusChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Patient Number:</label></td>
                    <td><input type="text"  onChange={event=>this.onpnoChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Test Name:</label></td>
                    <td><input type="text"  onChange={event=>this.ontestNameChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Required Date:</label></td>
                    <td><input type="text"  onChange={event=>this.onreqDateChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Due Date:</label></td>
                    <td><input type="text"  onChange={event=>this.ondueDateChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Patient Type:</label></td>
                    <td><input type="text"  onChange={event=>this.onpTYpeChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Request Person:</label></td>
                    <td><input type="text"  onChange={event=>this.onreqPersonChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Comments:</label></td>
                    <td><input type="text"  onChange={event=>this.oncomChange(event)} required/></td>
                    </tr>
                    <input type="submit" value="ADD"/>
                </form>
            </div> */}

           { /*<div>
                <hr/>
                <form onSubmit={event=>this.formUpdateSub(event)}>
                   <tr> <td><label>Priority:</label></td>
                    <td><input type="text" onChange={event=>this.onpriorityChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Status:</label></td>
                    <td><input type="text"  onChange={event=>this.onstatusChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Patient Number:</label></td>
                    <td><input type="text"  onChange={event=>this.onpnoChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Test Name:</label></td>
                    <td><input type="text"  onChange={event=>this.ontestNameChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Required Date:</label></td>
                    <td><input type="text"  onChange={event=>this.onreqDateChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Due Date:</label></td>
                    <td><input type="text"  onChange={event=>this.ondueDateChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Patient Type:</label></td>
                    <td><input type="text"  onChange={event=>this.onpTYpeChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Request Person:</label></td>
                    <td><input type="text"  onChange={event=>this.onreqPersonChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Comments:</label></td>
                    <td><input type="text"  onChange={event=>this.oncomChange(event)} required/></td>
                    </tr>
                    <input type="submit" value="Update"/>
                </form>
            </div>*/}
          {/*  <div>
                <hr/>
                <h1 style={{color : "black"}}>delete form</h1>
                <form onSubmit={event=>this.formDeleteSub(event)}>
                 <tr><td>  <label>Request Id</label></td>
                     <td><input type="text" onChange={event=>this.onidChange(event)} required/></td></tr>
                    <input type="submit" value="Delete"/>
                </form>
            </div>*/}

        </div>


    

        </div>
    }


    getAllLabOrders() {
        axios.get('http://localhost:3001/Laboratory/order')
            .then(function (res) {
                let laborder = res.data.data;
                this.setState({laborder});
                console.log(laborder);
            }.bind(this)).catch(function(err){
                console.log(err);
            });
        
    }

    insertLabOrder(obj){
            axios.post('http://localhost:3001/Laboratory/order', obj)
            .then(function (res) {
                console.log(res);
            }).catch(function(err){
                console.log(err);
            });        
    }

    updateLabOrder(id ,obj){
        axios.put('http://localhost:3001/Laboratory/order/' + id, obj)
        .then(function (res) {
        }).catch(function(err){
            console.log(err);
        });        
    }

    deleteLabOrder(id){
        return new Promise(function (resolve , reject){
            axios.delete('http://localhost:3001/Laboratory/order/' + id)
            .then(function (res) {
            }).catch(function(err){
                console.log(err);
            }); 
        })        
    }

} 



