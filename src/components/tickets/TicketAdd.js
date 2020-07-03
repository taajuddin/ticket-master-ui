import React from 'react'

import TicketForm from './TicketForm'

import {connect} from 'react-redux'
//import {startAddTicket} from '../../actions/tickets'

class TicketAdd extends React.Component{
    // handleTicketSubmit = (ticket) => {

    //     const redirect = () => this.props.history.push('/tickets')
    //     this.props.dispatch(startAddTicket(ticket,redirect))
        
    // }

    render(){
        return (
            <div>
                <h2>Add Ticket</h2>
                <TicketForm />
            </div>
        )
    }
}



export default connect()(TicketAdd)