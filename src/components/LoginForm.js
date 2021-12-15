import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function LoginForm({setVerif}) {
  return (
    <div>
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
            const { email, password } = fields;
            const body = JSON.stringify({ email, password });
            const headers = { "Content-Type": "application/json" };
            fetch("http://localhost:3005/login", {
              method: "POST",
              body,
              headers,
            }).then((response) => {
              return response.text().then((text) => {
                if (text) {
                  let user = null;
                  try {
                    //ici on met a jour le state dans admin sit pour
                    if(setVerif !== undefined){
                      setVerif(true)
                    }
                    user = JSON.parse(text);
                    console.log("user", user);
                  } catch {
                    console.log("error");
                  }
                  //ici on set le user si ce dont on a fait precedement ca bien
                  // setUser(user);

                  // pour se rediriger vers  une route specifique lorsque on a un user
                  if (user) {
                    // window.location.href = "/";
                  }
                } else {
                }
              });
            });
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
    </div>
  );
}

export default LoginForm;
