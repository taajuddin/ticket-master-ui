import React from 'react'
import {Link} from 'react-router-dom'


function EmployeeItem(props){
    const {index,id,name,email,mobile,department,handleRemove,text} = props
    return (
        <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{department}</td>
            <td><Link to={`/employees/${id}`}><button>show</button></Link></td>
            <td><button  onClick = {()=>{
                return handleRemove(id)
            }}>{text}</button></td>
        </tr>
    )
}

export default EmployeeItem