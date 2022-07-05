import { ErrorMessage, Field } from "formik";
import TextError from "../UI/TextError";

const InputGroup = ({
  formProps,
  icon,
  onKeyUp,
  value,
  name,
  type,
  onBlur,
}) => {
  const errors = formProps.errors[name] && formProps.touched[name];

  const findSpanElement = (e) =>
    e.target.closest(".input-group").querySelector(".input-group__text");

  const focusFieldHandler = (e) => {
    const spanEl = findSpanElement(e);
    spanEl.classList.add("filled");
  };

  const blurFieldHandler = (e) => {
    const spanEl = findSpanElement(e);
    if (!value) spanEl.classList.remove("filled");
    onBlur(e);
  };

  return (
    <div className="input-group__container">
      <div className={`input-group ${errors && "input-group__error"}`}>
        <label htmlFor={name} className={errors && "input-group__error"}>
          <i className={`${icon} input-group__icon`}></i>
          <span className="hidden">Email</span>
        </label>
        <Field
          onFocus={focusFieldHandler}
          onBlur={blurFieldHandler}
          onKeyUp={onKeyUp}
          type={type}
          id={name}
          name={name}
          className="input-group__field"
        />
        <span className={`input-group__text ${value !== "" && "filled"}`}>
          {name}
        </span>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputGroup;
