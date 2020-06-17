import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import TicketItem from './TicketItem'
import {startRemoveTicket} from '../../actions/tickets'


 class TicketList extends Component {

    findDepartment = (id) => {
        return this.props.departments.find(dept => dept._id == id)
    }
    findEmployee=(id)=>{
        return this.props.employees.find(emp =>emp._id==id)
    }
    findCustomer = (id) => {
        return this.props.customers.find(cust =>cust._id==id)
    }

    handleRemove = (id) => {
        window.confirm("Are  you sure want to delete yes")
              this.props.dispatch(startRemoveTicket(id))
    }

    render() {
        return (
            <div>
                <h2>Tickets-{this.props.tickets.length}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Code No</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employee</th>
                            <th>Message</th>
                            <th>Priority</th>
                            <th>Actions</th>
                            <th>Remove</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody> 
                            
                            {this.props.tickets.map((ticket,index) => {
                                return <TicketItem key={ticket._id} 
                                                    id={ticket._id} 
                                                    index={index}
                                                    code={ticket.code} 
                                                    customer={ticket.customer.name?ticket.customer.name:this.findCustomer(ticket.customer).name} 
                                                    department= {ticket.department.name ? ticket.department.name : this.findDepartment(ticket.department).name}
                                                    employee= {ticket.employee.name ? ticket.employee.name : this.findEmployee(ticket.employee).name} 
                                                    message={ticket.message}
                                                    priority={ticket.priority}
                                                    completed={ticket.completed}
                                                    handleRemove = {this.handleRemove} 
                                                    text="remove" />
                            })}

               </tbody>
                </table>
                <Link to="/tickets/new">Add Tickets</Link>  
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        tickets:state.tickets,
        department:state.departments,
        employee:state.employees,
        customer:state.customers
    }
}
export default connect(mapStateToProps)(TicketList)