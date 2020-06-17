import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'
 class Register extends Component {
     constructor(props){
         super(props)
         this.state={
             username:'',
             email:'',
             password:''
         }
     }
     handleSubmit=(e)=>{
         e.preventDefault()
         const formData={
             username:this.state.username,
             email:this.state.email,
             password:this.state.password
         }
         const redirect=()=>{
             return this.props.history.push('/users/login')
         }
         this.props.dispatch(startRegisterUser(formData,redirect))
         //this.props.dispatch(startRegisterUser(formData, this.props))
     }
     handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
    render() {
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">username:
                        <input type="text"
                         name="username"
                         id="username" 
                         value={this.state.username} 
                         onChange={this.handleChange} />
                    </label><br/>
                    <label htmlFor="email">Email:
                        <input type="text" 
                        name="email"
                        id="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} />
                    </label><br/>
                    <label htmlFor="password">password:
                        <input type="password" 
                        name="password"
                        id="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}/>
                    </label><br/>
                    <input
                        type="submit"
                        value="register"
                     />

                </form>
            </div>
        )
    }
}
export default connect()(Register)