const ticketsReducer=(state=[],action)=>{
    const initialState=[]
    switch(action.type){
        case 'SET_CUSTOMERS': return [].concat(state=initialState,action.payload)

        case 'ADD_TICKETS':return [...state,action.payload]

        default :return [...state]
    }
}

export default ticketsReducer