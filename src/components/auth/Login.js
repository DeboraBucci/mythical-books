import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputGroup from "../UI/InputGroup";
import ParticlesBackground from "../UI/ParticlesBackground";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="login">
      <ParticlesBackground />

      <div className="login__content">
        <h2 className="login__title">
          <i className="fa-solid fa-dragon"></i> Log in
        </h2>
        <p className="login__comment">
          Welcome, intrepid adventurer. Prepare yourself for the journey ahead!
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formProps) => {
            return (
              <Form className="login__form">
                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-envelope"}
                  onKeyUp={onEmailChange}
                  onBlur={formProps.handleBlur}
                  value={email}
                  name="email"
                />

                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-lock"}
                  onKeyUp={onPasswordChange}
                  onBlur={formProps.handleBlur}
                  value={password}
                  name="password"
                />

                <div className="login__cta">
                  <button type="submit" className="btn from-right">
                    Log in
                  </button>

                  <button>
                    <Link
                      className="btn btn--reverse from-left--reverse"
                      to="/register"
                    >
                      Register
                    </Link>
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
