import React from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink,Table} from 'reactstrap'
import classnames from 'classnames'

import {connect} from 'react-redux'

import TicketItem from './TicketItem'
import TicketItem2 from './TicketItem2'
import {findCustomer} from '../../selectors/customersSelector'
import {findDepartment} from '../../selectors/departmentsSelector'
import {selectEmpName} from '../../selectors/employeesSelector'

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

    render() {
        const {tickets,handleClick,handleRemove} = this.props
        return (
            <div>
            <Nav tabs className="mb-3">
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}>
                    <div style={{cursor: "pointer"}}>Pending</div>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}>
                     <div style={{cursor: "pointer"}}>Completed</div>
                  </NavLink>
                </NavItem>

                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    { this.state.activeTab == 1 ? 
                        <div>
                        <h2>Tickets - {tickets.filter(ticket=>!ticket.isResolved).length}</h2>
                    <Table striped>
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
                            const customer=findCustomer(this.props.customers,ticket.customer)
                            const department=findDepartment(this.props.departments,ticket.department)
                            const employeeNames=selectEmpName(this.props.employees, ticket.employees.map(emp =>emp.employee))
                            return <TicketItem 
                                    key={ticket._id} 
                                    id={ticket._id} 
                                    code={ticket.code} 
                                    customer={customer?customer.name:''} 
                                    department={department?department.name:''} 
                                    employees={employeeNames.join(', ')}
                                    message={ticket.message} 
                                    priority ={ticket.priority} 
                                    handleRemove={handleRemove} 
                                    text="remove" 
                                    isResolved={ticket.isResolved} 
                                    handleClick={handleClick}/>
                        })}
                    </tbody>
                </Table>
                </div>
                    : null }
                  </TabPane>
                  <TabPane tabId="2">
                    { this.state.activeTab == 2 ? 
                        <div>
                        <h2>Tickets - {tickets.filter(ticket=>ticket.isResolved).length}</h2>
                    <Table striped>
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
                            const customer=findCustomer(this.props.customers,ticket.customer)
                            const department=findDepartment(this.props.departments,ticket.department)
                            const employeeNames=selectEmpName(this.props.employees, ticket.employees.map(emp =>emp.employee))

                            return <TicketItem2 
                                    key={ticket._id}
                                    id={ticket._id} 
                                    code={ticket.code} 
                                    customer={customer?customer.name:''}
                                    department={department?department.name:''} 
                                    employees={employeeNames.join(', ')}
                                    message={ticket.message} 
                                    priority ={ticket.priority} 
                                    handleRemove={handleRemove} 
                                    text="remove" 
                                    isResolved={ticket.isResolved} 
                                    handleClick={handleClick}/>
                        })}
                    </tbody>
                </Table>
                </div>
                    : null }
                  </TabPane>
                </TabContent>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers : state.customers,
        departments: state.departments,
        employees: state.employees,
        tickets:state.tickets
    }
    
}

export default connect(mapStateToProps)(TicketTab)