import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactUs() {
  return (
    <div>
      <h1>
        <Formik
          initialValues={{
            nom: "",
            prenom: "",
            email: "",
            telephone: "",
            message: "",
          }}
          validationSchema={Yup.object().shape({
            nom: Yup.string().required("Saisissez votre nom"),
            prenom: Yup.string().required("Saisissez votre prenom"),
            email: Yup.string()
              .email("Saisissez une adresse email valide")
              .required("Saisissez votre adresse mail"),

            telephone: Yup.string().required("Saisissez votre telephone"),
            message: Yup.string().required(
              "fait nous un petit mot svp en rappor de votre motivation"
            ),
          })}
          onSubmit={(fields) => {
            // console.log(fields);

            // const fields=fields.
            const body = JSON.stringify(fields);
            const headers = { "Content-Type": "application/json" };
            fetch("http://localhost:3005/contact/create", {
              method: "POST",
              body,
              headers,
            }).then((response) => {
              return response.text().then((text) => {
                if (text) {
                  window.location.href = "/";
                  //Error Message with Modal
                } else
                  console.log(
                    "impossible de nous contacter veuller changer de email"
                  );
              });
            });
          }}
        >
          {({ errors, isValid, dirty, touched }) => (
            <>
              <h3 className="text-center mt-3">Contact Us</h3>

              <Form className="col-6 offset-3">
                <div className="form-group pb-3">
                  <label htmlFor="nom">nom</label>
                  <Field
                    name="nom"
                    type="text"
                    className={
                      "form-control" +
                      (errors.nom && touched.nom ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="nom"
                    component="div"
                    className="invalid-feedback position-absolute"
                  />
                </div>

                <div className="form-group pb-3">
                  <label htmlFor="prenom">prenom</label>
                  <Field
                    name="prenom"
                    type="text"
                    className={
                      "form-control" +
                      (errors.prenom && touched.prenom ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="prenom"
                    component="div"
                    className="invalid-feedback position-absolute"
                  />
                </div>

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

                <div className="form-group pb-3">
                  <label htmlFor="telephone">telephone</label>
                  <Field
                    name="telephone"
                    type="text"
                    className={
                      "form-control" +
                      (errors.telephone && touched.telephone
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="telephone"
                    component="div"
                    className="invalid-feedback position-absolute"
                  />
                </div>

                <div className="form-group pb-3">
                  <label htmlFor="message"> Votre motivation</label>
                  <Field
                    name="message"
                    type="text"
                    as="textarea"
                    className={
                      "form-control" +
                      (errors.message && touched.message ? " is-invalid" : "")
                    }
                    autoComplete="username"
                  />
                  <ErrorMessage
                    name="message"
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
  );
}

export default ContactUs;
