const initialState = {
    coures:[],
    coureDetail:null
}

export default (state = initialState, action) => {
    switch(action.type){
        case "Fetch_Data":
            state.coures=action.payload;
            return {...state}
        case "Fetch_Detail":
            state.coureDetail=action.payload
            return {...state}
        default:
            return {...state}   
    }
    
}
