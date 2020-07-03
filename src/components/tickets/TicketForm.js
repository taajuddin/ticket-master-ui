import React from 'react'
// import axios from '../../config/axios'
// import Select from 'react-select'
import {withRouter} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {selectEmployeesByDepartment} from '../../selectors/employeesSelector'
import {startAddTicket} from '../../actions/tickets'

import {connect}  from 'react-redux'


class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code: props.ticket? props.ticket.code: '',
            customer: props.ticket? props.ticket.customer: '',
            department: props.ticket? props.ticket.department: '',
            employees:props.ticket?props.ticket.employees:[],
            message: props.ticket? props.ticket.message: '',
            priority: props.ticket? props.ticket.priority: '',
            priorities:['high','medium','low']
            // code:'',
            // customer:'',
            // department:'',
            // employees:[],
            // message:'',
            // priority:'',
            // priorities:['high','medium','low']
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const {code, customer, department,employees,message,priority}=this.state
        const formData={code,customer,department,message,priority}
        formData.employees=employees.map(emp =>({employee:emp}))
        // console.log(formData)
        const redirect=()=>{
            return this.props.history.push('/tickets')
        }
        this.props.dispatch(startAddTicket(formData,redirect))
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleDepartmentChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
            employees:[]
        })
    }
    handleEmployeeSelection=(e)=>{
        const id=e.target.value
        if(!this.state.employees.includes(id)){
            this.setState((prevstate)=>{
                return{
                employees:prevstate.employees.concat(id)
                }
            })
        }
    }
    render(){
        return( <div>
            <Form onSubmit={this.handleSubmit}>

                <FormGroup>
                    <Label htmlFor ="code">Code</Label>
                    <Input type="text" id="code" value={this.state.code} onChange={this.handleChange} name="code"/>
                </FormGroup>
                <FormGroup>            
                    <Label htmlFor="customer">Customer</Label>
                <Input type="select" id="customer" value={this.state.customer} onChange={this.handleChange} name="customer">            
                <option value="">select</option>
                    {this.props.customers.map(customer=>{
                            return <option key={customer._id} value={customer._id}>{customer.name} </option>
                        })}
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label htmlFor="department">Department</Label>
                    <Input type="select" id="department" value={this.state.department} onChange={this.handleDepartmentChange} name="department">
                    <option value="">select</option>
                        {this.props.departments.map(department=>{
                            return <option key={department._id} value={department._id}>{department.name}</option> 
                        })}
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="employees">Employees</Label>
                    <Input type="select" id="employees" value={this.state.employees} onChange={this.handleEmployeeSelection} name="employees">
                    <option value="">select</option>
                        {selectEmployeesByDepartment(this.props.employees,this.state.department).map(employee=>{
                            return <option key={employee._id} value={employee._id}>{employee.name}</option> 
                        })}
                    </Input>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="message">Message</Label>
                    <Input type="textarea" value={this.state.message} onChange={this.handleChange} name="message"/>
                </FormGroup>

                <FormGroup tag="fieldset">
                <legend>Priority</legend>
                {this.state.priorities.map((priorityMsg)=>{
                    return (<FormGroup check>
                    <Label check>
                        <Input type="radio" value={priorityMsg}  checked= {this.state.priority===priorityMsg} onChange={this.handleChange} name="priority"/>{' '}
                        {priorityMsg}
                    </Label>
                    </FormGroup>
                    )
                })}
                </FormGroup>
                        <br/>

        <Button type="submit">Submit</Button>
        </Form>

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

export default withRouter(connect(mapStateToProps)(TicketForm))

