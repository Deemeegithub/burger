import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";
const MenuItem = (props) => {
    return (
        <li className={css.MenuItem}>
            <NavLink className={(thisNav) => thisNav.isActive ? css.active : ''} to={props.link}>{props.children}</NavLink>
            {/* <a className={props.active ? css.active : null} href={props.link}>{props.children}</a> */}
        </li>
    )
}
export default MenuItem;