import React, { Component } from 'react'

 class DepartmentForm extends Component {
     constructor(props){
         super(props)
         this.state={
             name:props.department ?props.department.name:''

         }
     }
     handleChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     handleSubmit=(e)=>{
         e.preventDefault()
         const formData={
             name:this.state.name
         }
        this.props.department &&(formData.id=this.props.department._id)
        this.props.handleDepartmentSubmit(formData)
        this.setState({name:''})
     }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}
export default DepartmentForm