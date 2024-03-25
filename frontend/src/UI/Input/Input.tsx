import React from "react";
import style from "./Input.module.css";
import InputProps from "./Input.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Input({ type, placeHolder }: InputProps) {

  return <input placeholder={placeHolder} className={type === 'search' ? style.search : 'sendMessage'} />;
}

export default Input;
