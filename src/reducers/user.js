const initialState = {
    user: {},
    token: ''
}

export default function(state = initialState, action){
    switch(action.type){
        case 'LOGIN_USER':
            return{
                //...state,
                user: action.payload.user,
                token: action.payload.token
            }
            default:
                return state;
    }
}