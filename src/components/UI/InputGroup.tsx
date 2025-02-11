import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

interface InputGroup {
  formProps: any;
  icon: string;
  name: string;
  type?: string;
  title?: string;
  onKeyUp?: () => void;
  onBlur?: (e: React.FocusEvent) => void;
}

const InputGroup: React.FC<InputGroup> = ({
  formProps,
  icon,
  name,
  type = "text",
  title = name,
  onKeyUp,
  onBlur,
}) => {
  const errors = formProps.errors[name] && formProps.touched[name];

  const findSpanElement = (e: React.FocusEvent) =>
    e.target.closest(".input-group")?.querySelector(".input-group__text");

  const focusFieldHandler = (e: React.FocusEvent) => {
    const spanEl = findSpanElement(e);
    spanEl?.classList.add("filled");
  };

  const blurFieldHandler = (e: React.FocusEvent) => {
    const spanEl = findSpanElement(e);
    if (!formProps.values[name]) spanEl?.classList.remove("filled");
    if (onBlur) onBlur(e);
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
        <span
          className={`input-group__text ${
            formProps.values[name] !== "" && "filled"
          }`}
        >
          {title}
        </span>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputGroup;
