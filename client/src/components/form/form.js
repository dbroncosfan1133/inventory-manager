import React from "react";
import "./form.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="field">
      <div className="control">
        <input className="input outline" type="text" {...props} />
      </div>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="buttons">
      <button {...props} className="button formBtn is-large">{props.children}</button>
    </div>
  );
}