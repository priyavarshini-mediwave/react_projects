import React from "react";
interface divInterface {
  className: string;
  placeholder: string;
}
function Div({ placeholder, className }: divInterface) {
  return (
    <>
      <div placeholder={placeholder} className={className}></div>
    </>
  );
}
export default Div;
