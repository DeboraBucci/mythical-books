import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputGroup from "../UI/InputGroup";
import ParticlesBackground from "../UI/ParticlesBackground";
import { registerUser } from "api/auth-api";

const Register = () => {
  const initialValues = {
    username: "",
    name: "",
    surname: "",
    dateOfBirth: "",
    email: "",
    password: "",
    passwordCheck: "",
    country: "",
    city: "",
    postalCode: "",
    address: "",
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
      .oneOf([Yup.ref("password")], "Passwords must be identical"),
    country: Yup.string().required(),
  });

  const onSubmit = (values: any) => {
    const user = {
      username: values.username,
      password: values.password,
      email: values.email,
      dateOfBirth: values.dateOfBirth,
      name: values.name,
      surname: values.surname,
      country: values.country,
      address: values.address,
      city: values.city,
      postalCode: values.postalCode,
    };

    registerUser(user);
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
                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-user"}
                  onBlur={formProps.handleBlur}
                  name="username"
                />

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
                  <InputGroup
                    type="date"
                    formProps={formProps}
                    icon={"fa-solid fa-calendar"}
                    name="dateOfBirth"
                    title="date of birth"
                    onBlur={formProps.handleBlur}
                  />{" "}
                </div>

                <div className="register__form--joined">
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-envelope"}
                    onBlur={formProps.handleBlur}
                    name="email"
                  />
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-envelope"}
                    onBlur={formProps.handleBlur}
                    name="emailCheck"
                    title="email check"
                  />
                </div>

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

                <div className="register__form--joined">
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-globe"}
                    name="country"
                    onBlur={formProps.handleBlur}
                  />
                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-city"}
                    name="city"
                    onBlur={formProps.handleBlur}
                  />

                  <InputGroup
                    formProps={formProps}
                    icon={"fa-solid fa-hashtag"}
                    name="postalCode"
                    title="postal code"
                    onBlur={formProps.handleBlur}
                  />
                </div>

                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-map"}
                  name="address"
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
