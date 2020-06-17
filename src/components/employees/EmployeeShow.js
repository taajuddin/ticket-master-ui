import React from 'react'
// import axios from '../../config/axios'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class EmployeeShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }


    render(){
        return (
            <div>
                {this.props.employee && (
                    <div>
                        <h2>{this.props.employee.name} - {this.props.employee.email}</h2>
                        <Link to={`/employees/edit/${this.props.employee._id}`}>Edit</Link>
                    </div>
                )}
                
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        employee: state.employees.find(employee=>employee._id == id)
    }
}

export default connect(mapStateToProps)(EmployeeShow)