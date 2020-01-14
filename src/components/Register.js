import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
//formik
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
//redux
import { useDispatch } from 'react-redux'
import { logUsuario } from '../actions/userAction'
//axios
import clienteAxios from '../config/axios'
//style
import './styles/form.css'


const Register = () =>{
    return(
        <Fragment>
            <header className="header">
                <div className="head container">
                    <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/logoepayco.svg"/>
                    <Link to="/login" className="btn btn-outline-light">Inicie sesión</Link>
                </div>
            </header>
            <div className="card col-10 col-md-6 col-lg-4 mx-auto m-4 text-secondary animated bounceInLeft">
                <p className="text-center pt-4 text-secondary">Registrese gratis</p>
                <div className="row col-10 pb-4 mx-auto px-0">
                    <button className="btn btn-social col-5 mx-auto" >
                        <span> <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/google.png" className="iconos" /></span> <span className="iconosLetras ml-2">GOOGLE</span>
                    </button>
                    <div className="col-2"></div>
                    <button className="btn btn-social col-5 offset-2 mx-auto" >
                        <span> <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/FB.png" className="iconos" /></span> <span className="iconosLetras ml-2">FACEBOOK</span>
                    </button>
                </div>
                <div className="row col-10 mx-auto p-0">
                    <div className="col-5 line my-auto"></div>
                    <div className="col-2 text-center">O</div>
                    <div className="col-5 line my-auto"></div>
                </div>
                <div className="form-group mx-auto col-10 p-0">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Ingrese su nombre"
                    />
                </div>
                <div className="form-group mx-auto col-10 p-0">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        placeholder="correo@ejemplo.com"
                    />
                </div>
                <div className="form-group mx-auto col-10 p-0">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder="Ingrese su contraseña"
                    />
                </div>
                <div className="form-group mx-auto col-10 p-0">
                    <label>Repetir Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control"
                        placeholder="Confirmar contraseña"
                    />
                </div>
                <button className="btn btn-iniciar mx-auto col-10"> <span className="text-white">Siguiente</span> </button>
                <button className="btn text-center text-secondary"> ¿Olvidó su contraseña? </button>
                <p className="text-center"><span>¿Ya tiene una cuenta?</span> <span><button className="btn btn-link pt-0 m-0">Inicie sesión</button></span></p>
            </div>
        </Fragment>
    )
}


export default Register