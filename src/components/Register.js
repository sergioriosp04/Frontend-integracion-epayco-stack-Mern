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

//schema yup
const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'El nombre debe de teber mas de 3 caracteres')
    .max(20, 'El nombre debe ser menor a 20 caracteres')
    .required('El nombre es requerido'),
    email: Yup.string()
      .email('Correo invalido')
      .required('El correo es necesario'),
    password: Yup.string()
      .min(8, 'Contraseña debe tener minimo 8 caracteres')
      .max(20, 'La contraseña no puede ser tan larga')
      .matches(/[a-z]/, 'la contraseña debe una letra en minuscula')
      .matches(/[A-Z]/, 'la contraseña debe una letra en Mayuscula')
      .required('La contraseña es necesaria'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'las contraseñas deben concidir')
  });


const Register = () =>{
    return(
        <Fragment>
            <header className="header">
                <div className="head container">
                    <img src="https://multimedia-epayco.s3.amazonaws.com/dashboard/login/img/logoepayco.svg"/>
                    <Link to="/login" className="btn btn-outline-light">Inicie sesión</Link>
                </div>
            </header>
                <Formik
                initialValues={{
                    name: "",
                    email: '',
                    password: '',
                    passwordConfirm:''
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    
                }}
                >
                    {({ errors, touched }) => (
                        <div>
                            <div className="col-10 col-md-6 col-lg-4 mx-auto m-4 animated bounceInRight p-0">
                                {errors.name && touched.name ? (<p className="alert alert-danger text-center p-0 mb-1">{errors.name}</p>) : null}
                                {errors.email && touched.email ? (<p className="alert alert-danger text-center p-0 mb-1">{errors.email}</p>) : null}                               
                                {errors.password && touched.password ? (<p className="alert alert-danger text-center p-0 mb-1">{errors.password}</p>) : null}
                                {errors.passwordConfirm && touched.passwordConfirm ? (<p className="alert alert-danger text-center p-0 mb-1">{errors.passwordConfirm}</p>) : null}  
                            </div>
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
                                <Form>       
                                    <div className="form-group mx-auto col-10 p-0">
                                        <label>Name</label>
                                        <Field 
                                            name="name" 
                                            className="form-control"
                                            placeholder="Ingrese su nombre"
                                        />
                                    </div>
                                    <div className="form-group mx-auto col-10 p-0">
                                        <label>Email</label>
                                        <Field 
                                            name="email" 
                                            className="form-control"
                                            placeholder="correo@ejemplo.com"
                                        />
                                    </div>
                                    <div className="form-group mx-auto col-10 p-0">
                                        <label>Contraseña</label>
                                        <Field 
                                            name="password" 
                                            className="form-control"
                                            placeholder="Ingrese su contraseña"
                                        />
                                    </div>
                                    <div className="form-group mx-auto col-10 p-0">
                                        <label>Repetir Contraseña</label>
                                        <Field 
                                            name="passwordConfirm" 
                                            className="form-control"
                                            placeholder="Confirmar contraseña"
                                        />
                                    </div>
                                    <div className="mx-auto col-10 p-0">
                                        <button className="btn btn-iniciar"> <span className="text-white">Siguiente</span> </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )}
                </Formik>
                <button className="btn text-center text-secondary"> ¿Olvidó su contraseña? </button>
                <p className="text-center"><span>¿Ya tiene una cuenta?</span> <span><Link to="/login">Inicie sesión</Link></span></p>
        </Fragment>
    )
}

export default Register