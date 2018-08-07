import React,{Component} from 'react';
import axios from 'axios';

export default class LabOrderManage extends Component{

    constructor(props){
        super(props);
        this.state={
            laborder:[],
            NewLabOrder:{}

        }
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

    

    formUpdateSub(event){
       // event.preventDefault();
        event.stopPropagation();

        this.setState({ NewLabOrder : {requestId:this.requestId, priority : this.priority , status: this.status,pNO:this.pNO,testName:this.testName,reqDate:this.reqDate,dueDate:this.dueDate,ptype:this.ptype,reqPerson:this.reqPerson,com:this.com }});
       
        this.updateLabOrder(this.id,this.state.NewLabOrder)
    }

    

    formDeleteSub(event){
        event.preventDefault();
        event.stopPropagation();
       
        this.deleteLabOrder(this.id).then(function(){
            this.getAllLabOrders();
        });
    }


    render(){
        
        return  (
            <div>

                <button type="button" className="btn btn-info btn-md" data-toggle="modal" data-target={`#myModal${this.props.requestId}`}>Manage</button>

                    {/* <!-- Modal --> */}
                    <div id={`myModal${this.props.requestId}`} className="modal fade" role="dialog"  style={{zIndex:"5"}} data-backdrop="false">
                    <div className="modal-dialog">

                        {/* <!-- Modal content--> */}
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Order Manage Section</h4>
                        </div>
                        <div className="modal-body">
                            <div>
                <hr/>
                <form onSubmit={event=>this.formUpdateSub(event)}>
                   <tr> <td><label>Request Id:</label></td>
                    <td><input type="text"defaultValue={this.props.requestId} onChange={event=>this.onidChange(event)} /></td>
                    </tr>
                   <tr> <td><label>Priority:</label></td>
                    <td><input type="text" defaultValue={this.props.priority} onChange={event=>this.onpriorityChange(event)}  /></td>
                    </tr>
                    <tr><td><label>Status:</label></td>
                    <td><input type="text"  defaultValue={this.props.status} onChange={event=>this.onstatusChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Patient Number:</label></td>
                    <td><input type="text"  defaultValue={this.props.pNO} onChange={event=>this.onpnoChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Test Name:</label></td>
                    <td><input type="text"  defaultValue={this.props.testName} onChange={event=>this.ontestNameChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Required Date:</label></td>
                    <td><input type="text"  defaultValue={this.props.reqDate} onChange={event=>this.onreqDateChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Due Date:</label></td>
                    <td><input type="text"  defaultValue={this.props.dueDate} onChange={event=>this.ondueDateChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Patient Type:</label></td>
                    <td><input type="text"  defaultValue={this.props.ptype} onChange={event=>this.onpTYpeChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Request Person:</label></td>
                    <td><input type="text"  defaultValue={this.props.reqPerson} onChange={event=>this.onreqPersonChange(event)} required/></td>
                    </tr>
                    <tr><td><label>Comments:</label></td>
                    <td><input type="text"  defaultValue={this.props.com} onChange={event=>this.oncomChange(event)} required/></td>
                    </tr>
                    <input type="submit" value="Update"/>
                </form>
            </div>
            <div>
                <hr/>
                <h1 style={{color : "black"}}>Delete Order</h1>
                <form onSubmit={event=>this.formDeleteSub(event)}>
                 <tr><td>  <label>Request Id</label></td>
                     <td><input type="text" onChange={event=>this.onidChange(event)} required/></td></tr>
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