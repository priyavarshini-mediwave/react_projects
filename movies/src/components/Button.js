import React from "react";

function Button({onClick}){
    return (
        <div>
             <button type="submit" onClick={onClick}>submit</button>
        </div>
    )

}
export default Button;