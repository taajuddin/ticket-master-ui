import React from 'react'
import axios from './config/axios'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {setUser} from './actions/userAction'
import {startSetCustomers} from './actions/customers'
import { startSetDepartments } from './actions/departments'
import {startSetEmployees}   from './actions/employees'
import {startSetTickets} from './actions/tickets'

const store=configureStore()
if(localStorage.getItem('authToken')){
    axios.get('/users/account',{
         headers: {
                 'x-auth': localStorage.getItem('authToken')
         }
    })
    .then(response=>{
            const user = response.data
            store.dispatch(setUser(user))
            store.dispatch(startSetCustomers())
            store.dispatch(startSetDepartments())
            store.dispatch(startSetEmployees())
            store.dispatch(startSetTickets())
             
    })             
}

const jsx=(
    <Provider store={store} >
        <App/>
    </Provider>
)


ReactDOM.render(jsx,document.getElementById("root"))