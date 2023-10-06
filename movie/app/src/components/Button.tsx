import React from "react";
interface buttonInterface {
  name: string;
  onClick: () => void;
}
function Button({ name, onClick }: buttonInterface) {
  return (
    <div className="buttondiv">
      <button type="submit" value={name} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
export default Button;
