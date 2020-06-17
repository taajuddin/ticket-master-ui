import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
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
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import {startUserLogout} from './actions/userAction'

 function App(props) {

    const handleClick=()=>{
        props.dispatch(startUserLogout())
        
    }
    return (
        <BrowserRouter>
            <div>
                <h1>Ticket Master</h1>
                <Link to="/">Home</Link>
                {
                    Object.keys(props.user).length !==0 ?
                    (
                        <div>
                            <Link to="/customers">Customers</Link>|
                            <Link to="/departments">Departments</Link>|
                            <Link to="/employees">Employees</Link>|
                            <Link to="/tickets">Tickets</Link>
                            <Link to="#" onClick={handleClick}>Logout</Link>
                        </div>
                    ):(
                        <div>
                             <Link to="/users/register">Register</Link>
                             <Link to="/users/login">Login</Link>
                        </div>
                    )
                }
               
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
                    <Route path="/tickets" component={TicketList} />
                    <Route path="/users/register" component={Register} />
                    <Route path="/users/login" component={Login} />
                </Switch>
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