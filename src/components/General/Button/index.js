import React from "react";
import css from "./style.module.css";

const Button = props => {
    return (
        <button className={`${css.Button} ${css[props.btnType]}`} onClick={props.OnClickd}>{props.text}</button>
    )
}
export default Button;