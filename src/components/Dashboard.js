import React from 'react'
import decoded from 'jwt-decode'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


const Dashboard = ({history}) =>{
    // verificar si el cliente esta log
    
    try {
        const token = localStorage.getItem('token')
        //console.log(token)
        let decode = decoded(token);
        let whenExpired = Date.now() / 1000
        //console.log(whenExpired)
        //console.log(decode.exp)

        if (decode.exp > whenExpired) {
            console.log('token bien')
            //return true;
        } else {
            console.log('token expired')
            history.push('/login')
            //return false;
        }
      } catch (err) {
        console.log("expired check failed! Line 42: AuthService.js");
        history.push('/login')
        return false;
      }


    return(
        <div>dash</div>
    )
}

export default Dashboard