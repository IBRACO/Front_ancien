import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Cadhesion() {
    return (
        <div>
            <h1>
            <Formik
        initialValues={{
           startday:"",
           endday: "",
          id_Utilisateur: "",
         
         
          
        }}
        validationSchema={Yup.object().shape({
            startday: Yup.string().required("Saisissez le startday de la cotisation"),
            endday: Yup.string().required("Saisissez votre endday"),
         
            id_Utilisateur: Yup.string().required("Saisissez le id_Utilisateur"),
           
        })}
        onSubmit={(fields) => {
          // console.log(fields);
          // delete fields.confirmPassword;
          // fields.role = 1;
          // fields.is_active = 1;
          // fields.deleted = 0;
          // const fields=fields.
          const id_Utilisateur = JSON.stringify(fields);
          const headers = {'Content-Type':'application/json'}
          fetch("http://localhost:3005/adhesion/create", { method: "POST", id_Utilisateur, headers }).then(
            (response) => {

              // return response.text().then((text) => {
              //   if (text===true) {
                    
              //           window.location.href = "/";
              //         //Error Message with Modal
                   
           
              //   } else {
              //    console.log("inscription imposible")
              //   }
              // });
              if (response){
                alert("enregistrement avec succes")
                window.location.href = "/cadhesion";

                // setTimeout(() => {
                //   window.location.href = "/";
                //   },
                //     3000
                //    );
               

              } 
              else {
               alert(("impossible de creer la cotisation"))
               }




            }
          );
        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">Crayer une actualite</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="nom">startday</label>
                <Field
                  name="startday"
                  type="text"
                  className={
                    "form-control" +
                    (errors.startday && touched.startday ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="startday"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
             

              <div className="form-group pb-3">
                <label htmlFor="endday">endday</label>
                <Field
                  name="endday"
                  type="text"
                  className={
                    "form-control" +
                    (errors.endday && touched.endday ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="endday"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
             
             

              <div className="form-group pb-3">
                <label htmlFor="id_Utilisateur">id_Utilisateur</label>
                <Field
                  name="id_Utilisateur"
                  type="text"
                  as="textarea"
                  className={
                    "form-control" +
                    (errors.id_Utilisateur && touched.id_Utilisateur ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="id_Utilisateur"
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

export default Cadhesion
