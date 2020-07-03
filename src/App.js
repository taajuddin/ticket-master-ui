import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/static/Home'
import CustomersList from './components/customers/CustomerList'
import CustomerNew from './components/customers/CustomerNew'
import CustomerShow from './components/customers/CustomerShow'
import CustomerEdit from './components/customers/CustomerEdit'

import DepartmentsList from './components/departments/DepartmentsList'
import DepartmentShow from './components/departments/DepartmentShow'
import DepartmentEdit from './components/departments/DepartmentEdit'

import EmployeeList from './components/employees/EmployeeList'
import EmployeeEdit from './components/employees/EmployeeEdit'
import EmployeeShow from './components/employees/EmployeeShow'
import EmployeeNew from './components/employees/EmployeeNew'

import TicketList from './components/tickets/TicketList'
import TicketAdd from './components/tickets/TicketAdd'
import TicketShow from './components/tickets/TicketShow'
import TicketEdit from './components/tickets/TicketEdit'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import {startUserLogout} from './actions/userAction'
import './App.css'
import swal from 'sweetalert'

 function App(props) {

    // const handleClick=()=>{
    //     props.dispatch(startUserLogout())
        
    // }
    return (
        <BrowserRouter>
            <div>
                <Navbar color="light" light expand="md" className="mb-5">
                <NavbarBrand>Ticket Master</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link text-primary" to="/">Home</Link>
                </NavItem>
                {
                    Object.keys(props.user).length !==0 ?
                    (
                        <React.Fragment>
                        <NavItem>
                          <Link className="nav-link text-primary" to="/customers">Customers</Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-link text-primary" to="/departments">Departments</Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-link text-primary" to="/employees">Employees</Link>
                        </NavItem>
                        <NavItem>
                          <Link className="nav-link text-primary" to="/tickets">Tickets</Link>
                        </NavItem>
                        <NavItem > 
                          <Link className="nav-link text-primary" to="/" onClick={()=>{
                                  swal({
                                    title: "Are you sure you want to log out?",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                  })
                                  .then((willDelete) => {
                                    if (willDelete) {
                                      swal("Successfully Logged out", {
                                        icon: "success",
                                      });
                                      props.dispatch(startUserLogout())
                                    } 
                                  })
                                  }}>Logout
                            </Link>
                        </NavItem>
                        </React.Fragment>
                    ):(
                        <React.Fragment>
                        <NavItem>
                          <Link className="nav-link text-primary" to="/users/login">Login</Link>
                        </NavItem>
                      <NavItem>
                        <Link className="nav-link text-primary" to="/users/register">Register</Link>
                      </NavItem>
                      </React.Fragment>
                    )
                }
                </Nav>
               </Navbar>
               <div className="container">
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/customers" component={CustomersList} exact = {true}/>
                    <Route path ="/customers/new" component={CustomerNew}/>
                    <Route path="/customers/edit/:id" component={CustomerEdit} />
                    <Route path="/customers/:id" component={CustomerShow}/>

                    <Route path="/departments" component={DepartmentsList} exact={true} />
                    <Route path="/departments/edit/:id" component={DepartmentEdit}/>
                    <Route path="/departments/:id" component={DepartmentShow}/>

                    <Route path="/employees" component={EmployeeList} exact={true} />
                    <Route path="/employees/new" component={EmployeeNew} />
                    <Route path="/employees/edit/:id" component={EmployeeEdit}/>
                    <Route path="/employees/:id" component={EmployeeShow} />

                    <Route path="/tickets" component={TicketList} exact={true} />
                    <Route path="/tickets/new" component={TicketAdd} />
                    <Route path="/tickets/edit/:id" component={TicketEdit} />
                    <Route path="/tickets/:id" component={TicketShow} />
                    
                    <Route path="/users/register" component={Register} />
                    <Route path="/users/login" component={Login} />
                </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(App)