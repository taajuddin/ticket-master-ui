import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

 class TicketShow extends React.Component{

    findCustomer =  (id) => {
        return this.props.customers.find(customer => customer._id == id )
    }

    findDepartment = (id) => {
        return this.props.departments.find(department => department._id == id)
    }

    findEmployees = (id) => {
        return this.props.employees.find(employee => employee._id == id)
    }

    render(){
        return (
            <div>
                {this.props.ticket && (
                    <div>
                    <h2>Code Number - {this.props.ticket.code}</h2>
                    <ul>
                    <li>Customer -{this.props.ticket.customer.name? this.props.ticket.customer.name : this.findCustomer(this.props.ticket.customer).name}  </li>
                    <li>Employees - {this.props.ticket.employees[0].name ? this.props.ticket.employees.map((emp,index)=>(index===this.props.ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `): this.props.ticket.employees.map((emp,index)=>(index===this.props.ticket.employees.length-1)?`${this.findEmployees(emp).name}`: `${this.findEmployees(emp).name}, `)} </li>
                    <li>Department - {this.props.ticket.department.name? this.props.ticket.department.name: this.findDepartment(this.props.ticket.department).name}</li>
                    <li>Message - {this.props.ticket.message}</li>
                    <li>Priority - {this.props.ticket.priority}</li>
                    </ul>
                    <Link to={`/tickets/edit/${this.props.ticket._id}`}>Edit</Link>
                    </div>
                )}
                

            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        ticket: state.tickets.find(ticket=> ticket._id == id ),
        employees: state.employees,
        customers: state.customers,
        departments: state.departments,
    }
}

export default connect(mapStateToProps)(TicketShow)