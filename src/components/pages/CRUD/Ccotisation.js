import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Ccotisation() {
    return (
        <div>
            <h1>
            <Formik
        initialValues={{
           mois:"",
           annee: "",
          montant: "",
          datecotisation: "",
          moyen: "",
          id_Utilisateur: "",
          
        }}
        validationSchema={Yup.object().shape({
            mois: Yup.string().required("Saisissez le mois de la cotisation"),
            annee: Yup.string().required("Saisissez votre annee"),
         
            montant: Yup.string().required("Saisissez le montant"),
            datecotisation: Yup.string().required("Saisissez la date de la cotisation"),
            moyen: Yup.string().required("Saisissez le moyen de payement"),
            id_Utilisateur: Yup.string().required("Saisissez l'id de l'utilisateur"),
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
          fetch("http://localhost:3005/cotisation/create", { method: "POST", body, headers }).then(
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
                window.location.href = "/ccotisation";

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
            <h3 className="text-center mt-3">Crayer une cotisation</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="nom">mois</label>
                <Field
                  name="mois"
                  type="text"
                  className={
                    "form-control" +
                    (errors.mois && touched.mois ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="mois"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="annee">annee</label>
                <Field
                  name="annee"
                  type="text"
                  className={
                    "form-control" +
                    (errors.annee && touched.annee ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="annee"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="montant">montant</label>
                <Field
                  name="montant"
                  type="text"
                  className={
                    "form-control" +
                    (errors.montant && touched.montant ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="montant"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="datecotisation">datecotisation</label>
                <Field
                  name="datecotisation"
                  type="text"
                  className={
                    "form-control" +
                    (errors.datecotisation && touched.datecotisation ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="datecotisation"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              

              <div className="form-group pb-3">
                <label htmlFor="moyen">moyen</label>
                <Field
                  name="moyen"
                  type="text"
                  className={
                    "form-control" +
                    (errors.moyen && touched.moyen ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="moyen"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="id_Utilisateur">id_Utilisateur</label>
                <Field
                  name="id_Utilisateur"
                  type="text"
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

export default Ccotisation
