import React, { Component } from 'react';
import Testcatemange from './testCateManage'
import Addcategory from './AddNewCategory'
import axios from 'axios';

export default class Testcategories extends Component {

    constructor(props){
        super(props)
        this.state = {
            CategoryVal : [],
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    componentWillMount(){
        
        this.getAllCategory()
    }

    render(){

        let testName = this.state.CategoryVal.filter(
            (Category)=>{
                return Category.LabTestCategoryName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )

        return <div>

        <Addcategory />

        <div className="container col-md-12">
                    <input type="text" placeholder="Search By Test Category" style={{width: "300px",
                                                boxSizing: "border-box",
                                                border: "2px solid #ccc",
                                                borderRadius:"25px",
                                                fontSize: "14px",
                                                padding: "10px 20px 10px 20px",
                                                transition: "width 0.4s ease-in-out",
                                                float:"right",
                                                margin:"2px 0px 20px 0px"}} 
                                                value={this.state.search} onChange={this.updateSearch.bind(this)}/> 

            <table className="table" style={{ padding:"10px"}}> 
            <thead>
            <tr>
                    
                    <th>Test ID</th>
                    <th>Test Category</th>
                    <th></th>
                </tr>  
            </thead>
            <tbody>
            {
                    testName.map(Category => {
                        return <tr key={Category.LabTestCategoryId}>
                            
                        <td>{Category.LabTestCategoryId}</td>
                        <td>{Category.LabTestCategoryName}</td>
                        <td>
                            <Testcatemange testId = {Category.LabTestCategoryId} name={Category.LabTestCategoryName} />
                        </td>
                    </tr>
                })
            }  
            </tbody>
        </table>                                        
                                         
                                                
         </div>
    </div>
    }

    
    getAllCategory=()=>{
        axios.get('http://localhost:3001/Laboratory/LabTestCategory').then(function(res){
            let CategoryVal = res.data.data;
            this.setState({CategoryVal});
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

}