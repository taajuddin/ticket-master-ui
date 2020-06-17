import React, { Component } from 'react'

class CustomerForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name: props.customer?props.customer.name : '',
            email: props.customer?props.customer.email : '', 
            mobile: props.customer?props.customer.mobile : ''

        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
        }
        console.log(this.props)
        this.props.customer && (formData.id = this.props.customer._id)

        console.log(formData)
        this.props.handleCustomerSubmit(formData)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name
                        <input type="text"
                            name="name"
                            id="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            placeholder="enter your name"

                        />

                    </label><br/>
                    <label htmlFor="email">Email
                        <input type="text"
                            name="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="enter your email"
                            
                        />

                    </label><br/>
                    <label htmlFor="mobile">Number
                        <input type="text"
                            name="mobile"
                            id="mobile"
                            value={this.state.mobile}
                            onChange={this.handleChange}
                            placeholder="enter your contact number"
                            
                        />
                    </label><br/>
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}
export default CustomerForm