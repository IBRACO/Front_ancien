  
// import React, { Component } from 'react';
import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../../App.css';
import UserContext from '../../contexts/UserContext'
import { Link } from "react-router-dom";
// export default function Connexion() {
//   // return <h1 className='sign-up'>Connection</h1>;
// }
class Connexion extends Component{

  static contextType = UserContext

  render(){

    const { setUser } = this.context
    return(
      <h1>
      <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Saisir une adresse email valide")
          .required("Saisir un identifiant"),

        password: Yup.string()
          .required("Saisir un mot de passe")
          .min(4, "Le mot de passe doit contenir au moins 4 caractères"),
      })}
      onSubmit={(fields) => {
        // console.log(fields);
        const {email, password}=fields;
        const body = JSON.stringify({ email, password});
        const headers = {'Content-Type':'application/json'}
        fetch("http://localhost:3005/login", { method: "POST", body, headers }).then(
          (response) => {
            return response.text().then((text)=>{
              if(text){
                let user = null;
                try{
                  user = JSON.parse(text);
                  console.log("user", user)

                } catch{
                  console.log("error")
                }
                //ici on set le user si ce dont on a fait precedement ca bien
                window.location.href = "/";
                setUser(user);
               
                
                
               // pour se rediriger vers  une route specifique lorsque on a un user
                if(user.role){
                  window.location.href = "/";
                }
              }else{

              }
            })
          }
        )
      }}
    >
      {({ errors, isValid, dirty, touched }) => (
        <>
          <h3 className="text-center mt-3">Authentification</h3>
         
          <Form className="col-6 offset-3">
            <div className="form-group pb-3">
              <label htmlFor="email">email</label>
              <Field
                name="email"
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
                autoComplete="username"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback position-absolute"
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="password">Mot de passe</label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
                autoComplete="current-password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback position-absolute"
              />
            </div>

            
              
             
                
              
            

            <div className="form-group d-flex justify-content-between">
              <button type="reset" className="btn btn-danger">
                clean
              </button>
              <button type="reset" className="btn btn-info">
              <Link
                  to="/motdepassoublier"
                  // className="nav-links"
                  
                >
                 mot de pass oublier :  clicker ici
                </Link>

              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!(dirty && isValid)}
              >
                Validate
              </button>
            </div>
          </Form>
        </>
      )}
    </Formik>
    </h1>

    );
  }
}
export default Connexion ;