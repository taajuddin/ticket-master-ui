import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import DepartmentForm from './DepartmentForm'
import { startRemoveDepartment, startAddDepartment } from '../../actions/departments'

class DepartmentsList extends React.Component {
    
    handleDepartmentSubmit = (department) => {
    const redirect = () => this.props.history.push('/departments')
    this.props.dispatch(startAddDepartment(department,redirect))
 }


  handleRemove = (id) =>{
            alert('Are you sure want to delete')
          this.props.dispatch(startRemoveDepartment(id))
        } 
    
    render(){
        return (
            <div>
                <h2>Departments - {this.props.departments.length}</h2>
                    <ul>
                        {this.props.departments.map(dept=>{
                           return <li key={dept._id}>{dept.name}<button  onClick={()=>{
                               this.handleRemove(dept._id)
                           }}>remove</button>
                        <Link to={`/departments/${dept._id}`}><button>show</button></Link>
                        </li> }
                        )}
                    </ul>
                    <br/>
                    <h3>Add Department</h3>
                    <DepartmentForm handleDepartmentSubmit = {this.handleDepartmentSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departments:state.departments
    }
}

export default connect(mapStateToProps)(DepartmentsList)