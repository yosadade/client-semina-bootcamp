import React from "react";
import { Form } from "react-router-dom";

const TextInput = ({ type, name, value, placeholder, onChange }) => {
  return (
    <Form.Control
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextInput;
