import React, {Fragment, useState} from 'react'
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

//schema yup
const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Contraseña debe tener minimo 8 caracteres')
      .max(20, 'La contraseña no puede ser tan larga')
      //.matches(/[a-z]/, 'at least one lowercase char')
      .required('La contraseña es necesaria'),
    email: Yup.string()
      .email('Correo invalido')
      .required('El correo es necesario'),
  });
  
  const Login = ({history}) =>{
      const dispatch = useDispatch()
      const usuarioLog =( user, token) => dispatch(logUsuario(user, token))
      
      let noExiste = ''
      return(
        <Fragment>
            <header className="header">
                <div className="head container">
                    <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/logoepayco.svg"/>
                    <Link to="/register" className="btn btn-outline-light">Registrarse gratis</Link>
                </div>
            </header>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    const user = {
                        email: values.email,
                        password: values.password                        
                    }
                    console.log(user)
                    const login = await clienteAxios.post('/client/signin', user)
                    console.log(login)
                    if(login.data.message == "the email doesn't exist" || login.data.message == "Contraseña incorrecta"){
                        noExiste= 'el correo no existe o la contraseña es incorrecta'
                        return
                    }
                    noExiste = ''
                    const logUser = login.data.user
                    const tokenUser = login.data.token
                    localStorage.setItem('user', JSON.stringify(logUser))
                    localStorage.setItem('token', JSON.stringify(tokenUser))
                    usuarioLog(logUser, tokenUser) //dispatch
                    history.push('/home')
                        
                }}
            >
            {({ errors, touched }) => (
                <div>
                    <div className="col-10 col-md-6 col-lg-4 mx-auto m-4 animated bounceInRight p-0">
                        {errors.email && touched.email ? (<p className="alert alert-danger text-center p-0 mb-1">{errors.email}</p>) : null}
                        {errors.password && touched.password ? (<p className="alert alert-danger text-center p-0 mb-1">{errors.password}</p>) : null}
                        {noExiste ? (<p className="alert alert-danger text-center p-0 mb-1">{noExiste}</p>) : null}
                    </div>
                    <div className="card col-10 col-md-6 col-lg-4 mx-auto m-4 animated bounceInRight">
                        <Form>
                            <p className="text-center pt-4 text-secondary">Inicie sesión</p>
                            <div className="form-group mx-auto col-10 p-0">
                                <label>Email</label>
                                <Field 
                                    name="email"
                                    className="form-control"
                                    placeholder="correo@ejemplo.com" 
                                />
                            </div>      
                            <div className="form-group mx-auto col-10 p-0">
                                <label>password</label>
                                <Field 
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="**********" 
                                />
                            </div>
                            <div className="mx-auto col-10 p-0">
                                <button className="btn btn-iniciar"> <span className="text-white">Iniciar Sesion</span> </button>                            
                            </div> 
                        </Form>
                        <button className="btn text-center text-secondary"> ¿Olvidó su contraseña? </button>
                        <div className="row col-10 mx-auto p-0">
                            <div className="col-5 line my-auto"></div>
                            <div className="col-2 text-center">O</div>
                            <div className="col-5 line my-auto"></div>
                        </div>
                        <div className="row pb-4">
                            <button className="btn btn-social col-4 mx-auto" >
                                <span> <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/google.png" className="iconos" /></span> <span className="iconosLetras ml-2">GOOGLE</span>
                            </button>
                            <button className="btn btn-social col-4 mx-auto" >
                                <span> <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/FB.png" className="iconos" /></span> <span className="iconosLetras ml-2">FACEBOOK</span>
                            </button>
                        </div>     
                    </div>
                </div>
            )}
            </Formik>
        </Fragment>
    )
}


export default Login