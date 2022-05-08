const ConnReducer = (state,action) =>{
    switch(action.type){
        case "CONN_START":
            return{
                user:null,
                isFetching: false,
                error: false,
            };
        case "CONN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "CONN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        default:
            return state
    }
};

export default ConnReducer;