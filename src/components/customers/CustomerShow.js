import React from 'react'
// import axios from '../../config/axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class CustomerShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            // tickets:[],
            // selectedTab:'1'
        }
    }
    render(){
        return(
            <div>
                {this.props.customer && (
                    <div>
                    <h2>{this.props.customer.name} - {this.props.customer.email}</h2>
                    <Link to={`/customers/edit/${this.props.customer._id}`}> Edit </Link>
                    </div>
                )}
                
            
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        customer: state.customers.find(customer=> customer._id == id)
    }
}

export default connect(mapStateToProps)(CustomerShow)