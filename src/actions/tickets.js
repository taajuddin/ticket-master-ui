import axios from '../config/axios'


export const setTickets = (ticket) => {
    return {
        type: 'SET_TICKETS',
        payload: ticket
    }
}

export const startSetTickets = () => {
    return (dispatch) => {
        axios.get('/tickets',{
                    headers: {
                        'x-auth': localStorage.getItem('authToken')
                    }
                })
            .then(response=>{
                const tickets = response.data
                dispatch(setTickets(tickets))
            })
            .catch(err=>{
                console.log(err)
            })

    }
}

export const removeTicket = (ticket) => {
    return {
        type: 'REMOVE_TICKET',
        payload: ticket
    }
}

export const startRemoveTicket = (id) => {
    return (dispatch) => {
        axios.delete(`/tickets/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            const ticket = response.data
            dispatch(removeTicket(ticket))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload: ticket
    }
}

export const startAddTicket = (ticket,redirect) => {
    return (dispatch) => {
        axios.post('/tickets',ticket,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            if(response.data.errors){
                alert(response.data.message)
            } else {
                const ticket = response.data
                
                dispatch(addTicket(ticket))
                redirect()
            }
        })
    }
}

export const editTicket = (ticket) => {
    return {
        type: 'EDIT_TICKET',
        payload: ticket
    }
}

export const startEditTicket = (ticket,redirect) => {
    return(dispatch) => {
        axios.put(`/tickets/${ticket.id}`,ticket,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response => {
            console.log(response.data)
            if (response.data.errors) {
              alert(response.data.message)
            } else {
                const ticket = response.data
                redirect()
                dispatch(editTicket(ticket))
            }
        })
    }
}

