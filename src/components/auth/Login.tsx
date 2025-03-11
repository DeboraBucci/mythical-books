import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputGroup from "../UI/InputGroup";
import ParticlesBackground from "../UI/ParticlesBackground";
import { loginUser } from "api/auth-api";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string().required("Required"),
  });

  const loginUserHandler = async (email: string, password: string) => {
    const token = await loginUser(email, password);

    if (token) localStorage.setItem("token", token);
  };

  const onSubmit = (values: any) => {
    loginUserHandler(values.email, values.password);
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
                  onBlur={formProps.handleBlur}
                  name="email"
                />

                <InputGroup
                  formProps={formProps}
                  icon={"fa-solid fa-lock"}
                  onBlur={formProps.handleBlur}
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
