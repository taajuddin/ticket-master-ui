import React from 'react'

import {connect} from 'react-redux'

import TicketItem from './TicketItem'
import TicketItem2 from './TicketItem2'

class TicketTab extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeTab: '1'
        }
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
          this.setState({ activeTab: tab });
        }
    }

    findCustomer =  (id) => {
        return this.props.customers.find(customer => customer._id == id )
    }

    findDepartment = (id) => {
        return this.props.departments.find(department => department._id == id)
    }

    findEmployees = (id) => {
        return this.props.employees.find(employee => employee._id == id)
    }

    render() {
        const {tickets,handleClick,handleRemove} = this.props
        return (
            <div>
            <nav tabs>
                <p>
                  <navlink
                    className={{ active: this.state.activeTab === '1' }}
                    onClick={() => { this.toggle('1'); }}>
                    <div >Pending</div>
                  </navlink>
                </p>
                <p>
                  <navlink
                    className={{ active: this.state.activeTab === '2' }}
                    onClick={() => { this.toggle('2'); }}>
                     <div style={{cursor: "pointer"}}>Completed</div>
                  </navlink>
                </p>

                </nav>
                <div activeTab={this.state.activeTab}>
                  <p tabId="1">
                    { this.state.activeTab == 1 ? 
                        <div>
                        <h2>Tickets - {tickets.filter(ticket=>!ticket.isResolved).length}</h2>
                    <table>
                    <thead>
                        <tr>
                            <th>Code No</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Message</th>
                            <th>Priority</th>
                            <th>Actions</th>
                            <th>Remove</th>
                            <th>Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket)=>{
                            return <TicketItem 
                                    key={ticket._id} 
                                    id={ticket._id} 
                                    code={ticket.code} 
                                    customer={ticket.customer.name? ticket.customer.name : this.findCustomer(ticket.customer).name} 
                                    // department= {!ticket.customer?'Deleted': ticket.customer.name ? ticket.customer.name : this.findCustomer(ticket.customer) == undefined? 'Deleted': this.findCustomer(ticket.customer).name} 
                                    // department= {!ticket.department?'Deleted':ticket.department.name ? ticket.department.name : this.findDepartment(ticket.department) == undefined? 'Deleted': this.findDepartment(ticket.department).name} 
                                    department={ticket.department.name? ticket.department.name: this.findDepartment(ticket.department).name} 
                                    employees={ticket.employees[0].name ? ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `): ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${this.findEmployees(emp).name}`: `${this.findEmployees(emp).name}, `)} 
                                    message={ticket.message} 
                                    priority ={ticket.priority} 
                                    handleRemove={handleRemove} 
                                    text="remove" 
                                    isResolved={ticket.isResolved} 
                                    handleClick={handleClick}/>
                        })}
                    </tbody>
                </table>
                </div>
                    : null }
                  </p>
                  <p tabId="2">
                    { this.state.activeTab == 2 ? 
                        <div>
                        <h2>Tickets - {tickets.filter(ticket=>ticket.isResolved).length}</h2>
                    <table >
                    <thead>
                        <tr>
                            <th>Code No</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Message</th>
                            <th>Priority</th>
                            <th>Actions</th>
                            <th>Remove</th>
                            <th>Not Complete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket)=>{
                            return <TicketItem2 
                                    key={ticket._id}
                                    id={ticket._id} 
                                    code={ticket.code} 
                                    customer={ticket.customer.name? ticket.customer.name : this.findCustomer(ticket.customer).name} 
                                    department={ticket.department.name? ticket.department.name: this.findDepartment(ticket.department).name} 
                                    employees={ticket.employees[0].name ? ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${emp.name}`: `${emp.name}, `): ticket.employees.map((emp,index)=>(index===ticket.employees.length-1)?`${this.findEmployees(emp).name}`: `${this.findEmployees(emp).name}, `)} 
                                    message={ticket.message} 
                                    priority ={ticket.priority} 
                                    handleRemove={handleRemove} 
                                    text="remove" 
                                    isResolved={ticket.isResolved} 
                                    handleClick={handleClick}/>
                        })}
                    </tbody>
                </table>
                </div>
                    : null }
                  </p>
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers : state.customers,
        departments: state.departments,
        employees: state.employees
    }
    
}

export default connect(mapStateToProps)(TicketTab)