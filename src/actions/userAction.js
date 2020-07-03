import axios from '../config/axios'
// import { Alert } from 'reactstrap';
import swal from 'sweetalert'

export const setUser=(user)=>{
    return {type:'SET_USER',payload:user}
}
export const startLoginUser=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/users/login',formData)
        .then((response)=>{  
            if(response.data.hasOwnProperty('error')){
                swal(`${response.data.errors}`,"","error")
            }
            else{
                swal("Successfully Logged In!","","success")
                localStorage.setItem('authToken', response.data.token)
                axios.get('/users/account',{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                        const user=response.data
                        dispatch(setUser(user))
                        redirect()
                    })
                .catch((err)=>{
                        alert(err)
                    })
                
                
            }
        })
    }
}
export const startGetUser=()=>{
    return (dispatch)=>{
        axios.get('/users/account',{
            header:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const user=response.data
            dispatch(setUser(user))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startRegisterUser =(formData,redirect)=>{
    return (dispatch)=>{
        axios.post('/users/register',formData)
        .then((response)=>{
           if(response.data.hasOwnProperty('errors')){
            swal(`${response.data.message}`,"","error")
           }
           else{
            swal("Successfully Registered!","", "success")
                redirect()
           }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const startUserLogout=()=>{
    return (dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.notice){
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href="/"
            }
        })
    }
}