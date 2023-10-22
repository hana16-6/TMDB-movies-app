import React from "react";

// helpers
const InvalidFeedback = (props) => {
  const { invalidFeedback: invalid, label } = props.inputProps;
  let textContent =
    typeof invalid === "string" ? invalid : `${label} can't be empty`;

  return invalid ? (
    <div className="invalid-feedback">{textContent}</div>
  ) : (
    <></>
  );
};

const ValidFeedback = (props) => {
  const { validFeedback: valid } = props.inputProps;
  let textContent = typeof valid === "string" ? valid : `looks good!`;

  return valid ? <div className="valid-feedback">{textContent}</div> : <></>;
};

const Label = (props) => {
  const { required, id, label, labelClass, labelClassName } = props.inputProps;
  const labelProps = {
    className: `${labelClassName ? labelClassName : ""} ${
      labelClass ? labelClass : "form-label"
    } ${required ? "require" : ""}`,
    htmlFor: id,
  };

  return label ? <label {...labelProps}>{label}</label> : <></>;
};

// default init
const INIT = (props) => ({
  name: props.name,
  value: props.value,
  id: props.id,
  required: props.required,
  disabled: props.disabled,
  readOnly: props.readOnly,
  maxLength: props.maxLength,
  minLength: props.minLength,
  onChange: props.onChange ? props.onChange : (data) => console.log(data),
});

// components
function SegmentWrapper(props) {
  const { inputProps } = props;
  return (
    <div className={inputProps.outer}>
      {inputProps.type === "radio" || inputProps.type === "checkbox" ? (
        <>
          {props.children}
          <Label inputProps={inputProps} />
        </>
      ) : (
        <>
          <Label inputProps={inputProps} />
          {props.children}
        </>
      )}
      <InvalidFeedback inputProps={inputProps} />
      <ValidFeedback inputProps={inputProps} />
    </div>
  );
}

function InputField(props) {
  const inputProps = {
    ...INIT(props),
    type: props.type ? props.type : "text",
    placeholder: props.placeholder,
    min: props.min,
    max: props.max,
    className: `form-control ${props.className ? props.className : ""} ${
      props.sm ? "form-control-sm" : ""
    } ${props.lg ? "form-control-lg" : ""}`,
  };

  return (
    <SegmentWrapper inputProps={props}>
      <input {...inputProps} />
    </SegmentWrapper>
  );
}
export { InputField };
