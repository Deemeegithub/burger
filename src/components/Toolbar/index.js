import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HanburderMenu from "../HanburgerMenu";

const Toolbar = (props) => {
    return (
        <header className={css.Toolbar}>
            <HanburderMenu toggleSideBar={props.toggleSideBar} />
            <Logo />
            <nav className={css.HideOnMobile}>
                <Menu />
            </nav>
        </header>
    )

}
export default Toolbar;