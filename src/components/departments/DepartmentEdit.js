import React from 'react'

import {connect} from 'react-redux'

import DepartmentForm from './DepartmentForm'
import { startEditDepartment } from '../../actions/departments'


class DepartmentEdit extends React.Component{
    
    handleDepartmentSubmit = (department) => {

        const redirect = () => this.props.history.push(`/departments`)
        this.props.dispatch(startEditDepartment(department,redirect))
        alert("successfully updated")
    }


    render(){
        return (
            <div>
                {this.props.department && (
                    <div>
                         <h2>Edit Department</h2>
                         {this.props.department.name && <DepartmentForm department = {this.props.department} handleDepartmentSubmit = {this.handleDepartmentSubmit} />}
                    </div>
                )}
               
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        department: state.departments.find(department => department._id === id)
    }
}

export default connect(mapStateToProps)(DepartmentEdit)