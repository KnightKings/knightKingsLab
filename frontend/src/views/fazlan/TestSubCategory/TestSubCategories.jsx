import React, { Component } from 'react';
import axios from 'axios';
import Testsubmanage from './TestSubCateManage'
import Addsubcat from './AddNewSubCategory'

export default class Testsubcategories extends Component {

    constructor(props){
        super(props)
        this.state = {
            SubCategoryVal : [],
            search : ''
        }
    }

    updateSearch(event){
        this.setState({search : event.target.value.substr(0,20)});
    }

    componentWillMount(){
        
        this.getAllSubCategory()
    }

    render(){
        let testSubName = this.state.SubCategoryVal.filter(
            (subCategory)=>{
                return subCategory.LabTestSubCategoryName.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        )

        return <div>

        <Addsubcat/>

        <div className="container col-md-12">
                    <input type="text" placeholder="Search By Test Sub Category" style={{width: "300px",
                                                boxSizing: "border-box",
                                                border: "2px solid #ccc",
                                                borderRadius:"25px",
                                                fontSize: "14px",
                                                padding: "10px 20px 10px 20px",
                                                transition: "width 0.4s ease-in-out",
                                                float:"right",
                                                margin:"20px 0px 20px 0px"}}
                                                value={this.state.search} onChange={this.updateSearch.bind(this)}/>

            <table className="table" style={{ padding:"10px"}}> 
            <thead>
            <tr>       
                    <th>Test ID</th>
                    <th>Test Name</th>
                    <th></th>
                </tr>  
            </thead>
            <tbody>
            {
                    testSubName.map(subCategory => {
                        return <tr key={subCategory.LabTestSubCategoryId}>
                            
                        <td>{subCategory.LabTestSubCategoryId}</td>
                        <td>{subCategory.LabTestSubCategoryName}</td>
                        <td>
                            <Testsubmanage testId = {subCategory.LabTestSubCategoryId} name={subCategory.LabTestSubCategoryName} />
                        </td>
                    </tr>
                })
            }  
            </tbody>
        </table>                                        
                                    
         </div>
    </div>
    }

    getAllSubCategory=()=>{
        axios.get('http://localhost:3001/Laboratory/LabTestSubCategory').then(function(res){
            let SubCategoryVal = res.data.data;
            this.setState({SubCategoryVal});
        }.bind(this)).catch(function (error) {
            console.log(error);
        });
    }

}