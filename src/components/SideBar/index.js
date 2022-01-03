import React from "react";
import Logo from "../Logo";
import Menu from "../Menu";
import css from "./style.module.css";
import Shadow from "../General/Shadow";
const SideBar = (props) => {
    let classes = [css.SideBar, css.Close];

    if (props.showSideBar) {
        classes = [css.SideBar, css.open];
    }
    return (
        <div>
            <Shadow show={props.showSideBar} darhad={props.toggleSideBar} />
            <div className={classes.join(" ")}>
                <div className={css.logo}>
                    <Logo />
                </div>
                <div>
                    <Menu />
                </div>
            </div >
        </div>
    )
}
export default SideBar;