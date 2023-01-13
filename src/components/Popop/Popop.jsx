import { useCallback, useState } from "react";
import React, { Component } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import "./popop.css"
import { InputLabel } from "@mui/material";

const Input = (fieldProps) => {
  const {
    fieldType, label, value, visited, touched, valid,
    onChange, onBlur, onFocus, validationMessage, 
  } = fieldProps;
  const invalid = !valid && visited;
  return (
    <div onBlur={onBlur} onFocus={onFocus}>
      <label>
        {label}
        <input
          type={fieldType}
          className={invalid ? "invalid" : ""}
          value={value}
          onChange={onChange}
        />
      </label>
      { invalid && 
      (<div className="required">{validationMessage}</div>) }
    </div>
  )
};

const DropDown = ({ label, value, valid, visited, options,
  onChange, onBlur, onFocus, validationMessage, }) => {
  const invalid = !valid && visited;
  return (
    <div onBlur={onBlur} onFocus={onFocus}>
      <label>
        { label }
        <select
          className={invalid ? "invalid" : ""}
          value={value}
          onChange={onChange}>
          <option key=""></option>
          {options.map(option => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      { invalid && 
        (<div className="required">{validationMessage}</div>) }
    </div>
  )
}

const Checkbox = ({ label, visited, valid, onChange, value,
  validationMessage }) => {
  const onValueChange = React.useCallback(
    () => {
      onChange({ value: !value });
    },
    [onChange, value]
  );
  const invalid = !valid && visited;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          className={invalid ? "invalid" : ""}
          onChange={onValueChange}
          value={value} />
        { label }
      </label>
      { invalid && 
        (<div className="required">{validationMessage}</div>) }
    </div>
  );
};

const emailValidator = (value) => (
  new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
);

const requiredValidator = (value) => {
  return value ? "" : "This field is required";
}

export default function Popop() {
  const handleSubmit = (data, event) => {
    console.log(`
      Email: ${data.email}
      First Name: ${data.Name}
      Copany name: ${data.company}
      Accepted Terms: ${data.acceptedTerms}
    `);
    
    event.preventDefault();
  }
  const [open, setOpen] = useState(false);
  return (
    <Form className="forms"
      onSubmit={handleSubmit}
      initialValues={{
        email: "Your email", Name: "First Name", Last: "Last Name",company: "Company name(optional)", password: "",enqiry: "Enqiry", country: "", acceptedTerms: false
      }}
      render={(formRenderProps) => (
        <div className="forms" onSubmit={formRenderProps.onSubmit}>
          <h1 className="contact">CONTACT US</h1>
          <img className="plus" src="/img/plus.svg"/>
          <svg onClick={() => setOpen(false)}  height="400" viewBox="0 0 400 400" width="400">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
          <div className="names">
          <Field
              className="name"
              name="Name"
              fieldType="text"
              component={Input} />
            <Field
              name="Last"
              fieldType="text"
              component={Input} />
          </div>
          <Field
            name="email"
            fieldType="email"
            component={Input}
            validator={[requiredValidator, emailValidator]} />

          <Field
            name="company"
            fieldType="text"
            component={Input}
            validator={requiredValidator} />

          <Field 
            name="enqiry"
            component={Input}
            validator={requiredValidator} />
          <div className="box">
            {/* <Field
              label= "I agree to the Terms of Use and Privecy Policy"
              name="acceptedTerms"
              component={Checkbox}
              validator={requiredValidator} /> */}
              {/* <input className="agree" type="checkbox" id="scales" name="scales">I agree to the <span>Terms of Use</span> and <span>Privecy Policy"</span></input> */}
          </div>
          <button className="send" disabled={!formRenderProps.allowSubmit}>
            Send
          </button>
        </div>
      )}>
    </Form>
  );
}
