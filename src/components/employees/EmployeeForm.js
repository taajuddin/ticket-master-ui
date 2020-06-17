import React, { Component } from 'react'
import {connect} from 'react-redux'

class EmployeeForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name: props.employee?props.employee.name : '',
            email: props.employee?props.employee.email : '', 
            mobile: props.employee?props.employee.mobile : '',
            department:props.employee?props.employee.department:''

        }
    }
    handleChange=(e)=>{
        if (e.target.type == 'select') {
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        console.log(this.props)
        this.props.employee &&(formData.id=this.props.employee._id)

        console.log(formData)
        this.props.handleEmployeeSubmit(formData)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        name="name"
                        value={this.state.name}
                        id="name"
                        onChange={this.handleChange}
                     /><br/>
                     <label htmlFor="email">Email</label>
                     <input type="text" 
                        name="email"
                        value={this.state.email}
                        id="email"
                        onChange={this.handleChange}
                     /><br/>
                     <label htmlFor="mobile">Number</label>
                     <input type="text" 
                        name="mobile"
                        id="mobile"
                        value={this.state.mobile}
                        onChange={this.handleChange}
                     /><br/>
                     <label htmlFor="department">Department</label>
                     <select
                        name="department"
                        id="department"
                        value={this.state.department}
                        onChange={this.handleChange}>
                        <option value="">select</option>
                        {this.props.departments.map((department)=>{
                            return <option  key={department._id} value={department._id}>{department.name}</option>
                        })}
                        </select><br/>
                     <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}
export default connect(mapStateToProps)(EmployeeForm)