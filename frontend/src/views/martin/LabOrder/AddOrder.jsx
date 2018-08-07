import React,{Component} from 'react'
import axios from 'axios'

//component for adding a order
export default class AddOrder extends Component{

    constructor(props){
        super(props)

        this.state ={
            getCurrentValue : []
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

    getNewState= () =>{

        let h =  this;
        return new Promise(function(resolve){
            h.setState({ getCurrentValue : {
                requestId : h.id,
                priority : h.priority ,
                status: h.status ,
                pNO:  h.pNO ,
                testName: h.testName,
                reqDate : h.reqDate,
                dueDate:h.dueDate,
                ptype:h.ptype,
                reqPerson:h.reqPerson,
                com:h.com
            } })
            resolve({"message": "success"})
        })
    }

    onAddClick = event=>{
        event.preventDefault();
        event.stopPropagation();
        let self = this;

        alert( this.id +" "+ this.priority +" "+this.status+" " + this.pNO+ " "+ this.testName+ " " + this.reqDate+" "+ this.dueDate+ " "+ this.ptype+" "+this.reqPerson+" "+ this.com);

        this.getNewState().then(function(){
            console.log(self.state.getCurrentValue);
            self.AddOrder(self.state.getCurrentValue);
        })
        alert("sdfsdf");
    }

    render(){
        return <div>
            <input type="button" data-toggle="modal" data-target="#myModal1" className="btn btn-primary" value="Add Order" style={{width: "153px",border: "2px solid #ccc",fontSize: "14px",
                padding: "10px 180px 10px 20px",
                margin:"20px 0px 20px 0px"}}/>

            <div id="myModal1" className="modal fade" role="dialog" data-backdrop="false">
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Order</h4>
                        </div>

                        <div className="modal-body">

                            <form className="col-md-12" onSubmit={event=>this.onAddClick(event)} action="/action_page.php">
                                <div className="form-group">
                                    <label >Request Id :</label>
                                    <input type="Number" onChange={event=>this.onidChange(event)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Priority : </label>
                                    <input type="text" onChange={event=>this.onpriorityChange(event)} className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label >Status :</label>
                                    <input type="text" onChange={event=>this.onstatusChange(event)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Patient Number : </label>
                                    <input type="text" onChange={event=>this.onpnoChange(event)} className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label >Test Name :</label>
                                    <input type="text" onChange={event=>this.ontestNameChange(event)} className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Required date : </label>
                                    <input type="text" onChange={event=>this.onreqDateChange(event)} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Due date : </label>
                                    <input type="text" onChange={event=>this.ondueDateChange(event)} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Patient Type : </label>
                                    <input type="text" onChange={event=>this.onpTYpeChange(event)} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Request Person : </label>
                                    <input type="text" onChange={event=>this.onreqPersonChange(event)} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Comments : </label>
                                    <input type="text" onChange={event=>this.oncomChange(event)} className="form-control"/>
                                </div>





                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    }

    AddOrder(obj){
        axios.post('http://localhost:3001/Laboratory/order', obj)
    }

}