import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Cactualite() {
    return (
        <div>
            <h1>
            <Formik
        initialValues={{
           video:"",
           titre: "",
          body: "",
          img: "",
          dateaffichage: "",
         
          
        }}
        validationSchema={Yup.object().shape({
            video: Yup.string().required("Saisissez le video de la cotisation"),
            titre: Yup.string().required("Saisissez votre titre"),
         
            body: Yup.string().required("Saisissez le body"),
            img: Yup.string().required("Saisissez le img"),
            dateaffichage: Yup.string().required("Saisissez la date de la cotisation"),
         
        })}
        onSubmit={(fields) => {
          // console.log(fields);
          // delete fields.confirmPassword;
          // fields.role = 1;
          // fields.is_active = 1;
          // fields.deleted = 0;
          // const fields=fields.
          const body = JSON.stringify(fields);
          const headers = {'Content-Type':'application/json'}
          fetch("http://localhost:3005/actualite/create", { method: "POST", body, headers }).then(
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
                window.location.href = "/cactualite";

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
                <label htmlFor="nom">video</label>
                <Field
                  name="video"
                  type="text"
                  className={
                    "form-control" +
                    (errors.video && touched.video ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="video"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="img">img</label>
                <Field
                  name="img"
                  type="text"
                  className={
                    "form-control" +
                    (errors.img && touched.img ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="img"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="titre">titre</label>
                <Field
                  name="titre"
                  type="text"
                  className={
                    "form-control" +
                    (errors.titre && touched.titre ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="titre"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
             
              <div className="form-group pb-3">
                <label htmlFor="dateaffichage">dateaffichage</label>
                <Field
                  name="dateaffichage"
                  type="text"
                  className={
                    "form-control" +
                    (errors.dateaffichage && touched.dateaffichage ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="dateaffichage"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="body">body</label>
                <Field
                  name="body"
                  type="text"
                  as="textarea"
                  className={
                    "form-control" +
                    (errors.body && touched.body ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="body"
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

export default Cactualite
