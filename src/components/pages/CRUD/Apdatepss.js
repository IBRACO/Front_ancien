import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Apdatepss() {
 return (
        <div>
             <h1>
            <Formik
                 initialValues={{
                 email: ""
                  }}
                 validationSchema={Yup.object().shape({
               
                email: Yup.string()
                .email("Saisissez une adresse email valide")
                .required("Saisissez votre adresse mail"),
             
               
            })}
            onSubmit={(fields) => {
             
              const body = JSON.stringify(fields);
              const headers = {'Content-Type':'application/json'}
              fetch("http://localhost:3005/utilisateur/motdepassoublier", { method: "POST", body, headers }).then((resp)=>resp.text()).then(
                (text) => {
                 
                 if(text==="true"){
                    alert("vous avez été contacter par mail,merci de pouvoir recreer votre mot de pass a nouveau en vliquant dans le mail envoyer à votre adreese electronique")
                    window.location.href = "/";
                }else{
                     alert("Cette adresse est introuvable,impossible de recuperer votre compte,veuiller conter le service clientelle au numero :0753381723");
                    window.location.href = "/";
                      }
                }
              )
             }}
          >
            {({ errors, isValid, dirty, touched }) => (
              <>
                <h1 className="text-center mt-3">Mot de pass oublier</h1>
                <Form className="col-6 offset-3">
                  
                <h2>Veuillez entrer votre adresse email</h2>
                  <div className="form-group pb-3">
                    <label htmlFor="email">Email</label>
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
    
                 <div className="form-group d-flex justify-content-between">
                    <button type="reset" className="btn btn-secondary">
                      Effacer
                    </button>
                 
                     <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!(dirty && isValid)}
                    >
                      Valider
                    </button>

                    

                  </div>
                </Form>
              </>
            )}
          </Formik>
          </h1>
     </div>
    )
}

export default Apdatepss
