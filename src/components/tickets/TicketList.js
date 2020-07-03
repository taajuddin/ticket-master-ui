import React from 'react'
import {Link} from 'react-router-dom'

import TicketTab from './TicketTab'

// import { Container, Row, Col } from 'reactstrap'

// import Chart from 'react-google-charts'
import swal from 'sweetalert'
import {Progress} from 'reactstrap'

import {connect}  from 'react-redux'
import {startToggleTask} from '../../actions/tickets'
import { startRemoveTicket} from '../../actions/tickets'
import {startSetTickets} from '../../actions/tickets'





 class TicketList extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            searchTerm:'',
            currentlyDisplayed: this.props.tickets
        }
    }
    componentDidMount(){
        if(this.props.tickets.length===0){
            this.props.dispatch(startSetTickets())
        }
    }

    findDepartment = (id) => {
        return this.props.departments.find(dept => dept._id == id)
    }

    handleRemove = (id) => {
        swal({
            title: "Are you sure you want to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Successfully Deleted", {
                icon: "success",
              });
              this.props.dispatch(startRemoveTicket(id))
              this.setState(prevState=>({
                currentlyDisplayed: prevState.currentlyDisplayed.filter(ticket=>ticket._id != id)
            }))
                } 
             })
    }

    handleClick = (id) =>{
        const ticket = this.props.tickets.find(ticket=>ticket._id ===id)
        const isResolved = ticket.isResolved

        this.props.dispatch(startToggleTask(id,isResolved))
    }

    handleSearch = (e) => {

        let newlyDisplayed = this.props.tickets.filter(ticket=>ticket.code.includes(e.target.value))
        this.setState({
            searchTerm: e.target.value,
            currentlyDisplayed: newlyDisplayed
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    } 

    calculate(){
        const allTickets = this.props.tickets.length
        const completedTickets = this.props.tickets.filter(ticket=>ticket.isResolved).length
        const percent = Math.round((completedTickets/allTickets)*100)
        return percent
    }

    render(){
        return (
            <div>
                 <form className="form-inline float-right mt-3 ml-3" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="search"  placeholder="Search Code" aria-label="Search" onChange={this.handleSearch}/>
                </form>

                <TicketTab tickets= {this.state.currentlyDisplayed.length == 0? this.props.tickets : this.state.currentlyDisplayed} handleClick={this.handleClick} handleRemove={this.handleRemove}/>

                <Link to ="/tickets/new" className="mb-4 mt">Add Ticket</Link>

                <div className="text-center">Completed Tickets: {this.calculate()}%</div>
                <Progress className="mb-5" striped value={`${this.calculate()}`}/>

            </div>
        )
        
    }
}

const mapsStateToProps = (state) => {
    return {
        tickets: state.tickets,
        departments: state.departments
    }
}

export default connect(mapsStateToProps)(TicketList)