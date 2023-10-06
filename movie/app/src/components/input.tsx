import React from "react";
interface inputInterface {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  //onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange:()=>void;
}
function Input({ label, name, type, placeholder, onChange }: inputInterface) {
  return (
    <div className="inputdiv">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
}
export default Input;
