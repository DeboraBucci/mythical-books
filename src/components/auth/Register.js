import React from "react";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputGroup from "../UI/InputGroup";
import ParticlesBackground from "../UI/ParticlesBackground";

const Register = () => {
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordCheck: "",
    country: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    surname: Yup.string().required(),
    email: Yup.string().required().email("Invalid email format"),
    password: Yup.string()
      .required()
      .min(8)
      .max(20)
      .matches(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
        "Password should have at least a number, a capitalized and a lowercased letter and a symbol"
      ),
    passwordCheck: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Passwords must be identical"),
    country: Yup.string().required(),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="register">
      <ParticlesBackground />

      <div className="register__content">
        <div>
          <h2 className="register__title">
            <i className="fa-solid fa-feather-pointed"></i> Register
          </h2>
          <p className="register__comment">
            Welcome, a new adventure is unfolding before your eyes, will you
            join in?
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formProps) => {
            return (
              <Form className="register__form">
                <div className="register__form--joined">
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-user"}
                    onBlur={formProps.handleBlur}
                    name="name"
                  />
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-signature"}
                    onBlur={formProps.handleBlur}
                    name="surname"
                  />
                </div>

                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-envelope"}
                  onBlur={formProps.handleBlur}
                  name="email"
                />

                <div className="register__form--joined">
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-lock-open"}
                    onBlur={formProps.handleBlur}
                    name="password"
                  />
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-lock"}
                    name="passwordCheck"
                    title="password check"
                    onBlur={formProps.handleBlur}
                  />
                </div>

                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-globe"}
                  name="country"
                  onBlur={formProps.handleBlur}
                />

                <div className="register__cta">
                  <button type="submit" className="btn from-right">
                    Register
                  </button>

                  <button>
                    <Link
                      className="btn btn--reverse from-left--reverse"
                      to="/login"
                    >
                      Log in
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

export default Register;
