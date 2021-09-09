const PrdoctReducer = (state = [], action) => {
   
    switch (action.type) {
        
        case "PRODUCT":
            return state = action.payload;
        case "LOADING":
            return state = 'Loading...'
            default :
            return state;
    }
}

export default PrdoctReducer