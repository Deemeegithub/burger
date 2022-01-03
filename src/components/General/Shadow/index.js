import React from "react";
import css from "./style.module.css";
const Sadow = (props) => {
    return (
        props.show ? <div className={css.Shadow} onClick={props.darhad}> </div> : null
    )
}
export default Sadow;