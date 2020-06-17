import React from 'react'


import {connect}  from 'react-redux'


class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code: props.ticket? props.ticket.code: '',
            customer: props.ticket? props.ticket.customer: '',
            department: props.ticket? props.ticket.department: '',
            employee: props.ticket? props.ticket.employee: [],
            message: props.ticket? props.ticket.message: '',
            priority: props.ticket? props.ticket.priority: ''
        }
    }
    handleChange = (e) => {
        if(e.target.name=='select'){
            this.setState({[e.target.name]:e.target.value})
        }
        this.setState({
            [e.target.name]:e.target.value
        })


    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            code: this.state.code,
            customer: this.state.customer,
            department: this.state.department,
            employees: this.state.employee,
            message: this.state.message,
            priority: this.state.priority
        }
        this.props.ticket && (formData.id = this.props.ticket._id)
        this.props.handleTicketSubmit(formData)
        console.log(formData)
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor ="code">Code</label>
                    <input type="text" id="code" value={this.state.code} onChange={this.handleChange} name="code"/>
            
                    <label htmlFor="customer">Customer</label>
                    <select id="customer" value={this.state.customer} onChange={this.handleChange} name="customer">
                    <option value="">select</option>
                        {this.props.customers.map(customer=>{
                             return <option key={customer._id} value={customer._id}>{customer.name} </option>
                        })}
                    </select>
            
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
                <label> Employees </label>
                            <select
                                name="employee"
                                placeholder="Select"
                                value={this.state.employee}
                                onChange={this.handleChange}>
                                <option value="">select</option>
                                {this.props.employees.map((employee)=>{
                                    return <option key={employee.id} value={employee._id}>{employee.name}</option>
                                })}
                            </select>
                <br/>
                <label htmlFor="message">Message</label>
                    <input type="textarea" value={this.state.message} onChange={this.handleChange} name="message"/>
        <legend>Priority</legend>
     
          <label >
            <input type="radio" value="High" checked= {this.state.priority==="High"} onChange={this.handleChange} name="priority"/>{' '}
            High
          </label>
          <label >
            <input type="radio" value="Medium" checked= {this.state.priority==="Medium"} onChange={this.handleChange} name="priority"/>{' '}
            Medium
          </label>
          <label >
            <input type="radio" value="Low" checked= {this.state.priority==="Low"} onChange={this.handleChange} name="priority"/>{' '}
            Low
          </label>
                 <br/>

                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers,
        departments: state.departments,
        employees: state.employees
    }
}

export default connect(mapStateToProps)(TicketForm)