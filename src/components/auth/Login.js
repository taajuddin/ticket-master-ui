import React, { Component } from 'react'
import {connect} from 'react-redux'
import {startLoginUser} from '../../actions/userAction'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        const redirect=()=>{
            return this.props.history.push('/')
        }
       this.props.dispatch(startLoginUser(formData,redirect))
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">email:
                    <input 
                        type='text'
                        name='email'
                        id='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </label><br/>
                    <label htmlFor='password'>password:
                        <input 
                            type='password'
                            name='password'
                            id='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label><br/>
                        <input
                            type='submit'
                            value='login' 
                        />
                </form>
            </div>
        )
    }
}
export default connect()(Login)