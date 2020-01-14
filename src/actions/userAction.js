export const logUsuario = (user, token) =>{
    return{
        type: 'LOGIN_USER',
        payload: {
            user,
            token
        }
    }
}