import React from 'react'
import {Link} from 'react-router-dom'

function TicketItem2(props){
    const {id,code,customer,department,employees,message,priority,handleRemove,text,isResolved,handleClick} = props
    return (
        isResolved &&
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
            <td><input type="checkbox" onClick= {()=> {
                return handleClick(id)
            }}/></td>
        </tr>
    )
}

export default TicketItem2