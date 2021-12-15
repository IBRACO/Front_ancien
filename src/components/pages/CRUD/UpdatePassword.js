import React from "react";
import { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function UpdatePassword({ match }) {
  const [isOk, setIsOk] = useState(false);
  // const [email, setEmail] = useState("");

  // const urlParams = new URLSearchParams(window.location.search)
  const token = match.params.token;

  const Vari = () => {
    const body = JSON.stringify({ token });

    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3005/utilisateur/verifToken", {
      method: "POST",
      body,
      headers,
    })
      .then((resp) => resp.text())
      .then((text) => {
        let te = JSON.parse(text);
        if (te.prenom) {
          setIsOk(true);
          //  setEmail(te.email)
        }
      });
  };
  Vari();

  return (
    <div>
      <h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Saisissez une adresse email valide")
              .required("Saisissez votre adresse mail"),
            password: Yup.string()
              .min(4, "Le mot de passe doit contenir au moins 4 caractères")
              .required("Saisissez un mot de passe"),
            confirmPassword: Yup.string()
              .oneOf(
                [Yup.ref("password"), null],
                "Les mots de passes ne sont pas identiques"
              )
              .required("Confirmez votre mot de passe"),
          })}
          onSubmit={(fields) => {
            // console.log(fields);
            delete fields.confirmPassword;

            const body = JSON.stringify(fields);
            const headers = { "Content-Type": "application/json" };
            fetch("http://localhost:3005/utilisateur/updatepass", {
              method: "POST",
              body,
              headers,
            }).then((response) => {
              // return response.text().then((text) => {
              //   if (text===true) {

              //           window.location.href = "/";
              //         //Error Message with Modal

              //   } else {
              //    console.log("inscription imposible")
              //   }
              // });
              const ab = parseInt(response);
              if (ab === 1) window.location.href = "/connexion";
              else {
                window.location.href = "/connexion";
              }
            });
          }}
        >
          {({ errors, isValid, dirty, touched }) => (
            <>
              <h1 className="text-center mt-3">
                Creer ou modifier votre mot de pass
              </h1>
              <h3 style={{ marginLeft: 300 }}>
                Veuiller entrer votre adresse Email et creer votre mot de passe
              </h3>

              <Form className="col-6 offset-3">
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
                  <label htmlFor="password">Choisir un Mot de passe</label>
                  <Field
                    name="password"
                    type="password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                    autoComplete="new-password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback position-absolute"
                  />
                </div>
                <div className="form-group pb-4">
                  <label htmlFor="confirmPassword">
                    Confirmer le Mot de passe
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                    autoComplete="new-password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback position-absolute"
                  />
                </div>

                <div className="form-group d-flex justify-content-between">
                  <button type="reset" className="btn btn-secondary">
                    Effacer
                  </button>

                  {!isOk ? (
                    <button className="btn btn-primary"></button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!(dirty && isValid)}
                    >
                      Valider
                    </button>
                  )}
                </div>
              </Form>
            </>
          )}
        </Formik>
      </h1>

      {/* } */}
    </div>
  );
}

export default UpdatePassword;
