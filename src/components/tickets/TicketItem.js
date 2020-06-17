import React from 'react'
import {Link} from 'react-router-dom'

function TicketItem(props){
    console.log('props',props)
    const {id,code,customer,employees,department,message,priority,handleRemove,text} = props
    return (
        <tr>
            <td>{code}</td>
            <td>{customer}</td>
            <td>{department}</td>
            <td>{employees}</td>
            <td>{message}</td>
            <td>{priority}</td>
            <td><Link to={`/tickets/${id}`}><button>show</button></Link></td>
            <td><button onClick = {()=>{
                return handleRemove(id)
            }}>{text}</button></td>
            <td><input type="checkbox"/></td>
        </tr>
    )
}

export default TicketItem