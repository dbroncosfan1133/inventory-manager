import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="field">
      <div className="control">
        <input className="input is-info" type="text" {...props} />
      </div>
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="buttons">
      <button {...props} className="button is-link is-large">{props.children}</button>
    </div>
  );
}