import React from "react";
import css from "./style.module.css"
const HanburderMenu = (props) => {
    return (
        <div className={css.HanburderMenu} onClick={props.toggleSideBar}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default HanburderMenu;