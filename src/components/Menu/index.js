import React, { Fragment } from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css";
import { connect } from "react-redux";
const Menu = (props) => {
    return (
        <div>
            <ul className={css.Menu}>

                {
                    props.localId ?
                        (
                            <Fragment>
                                <MenuItem link="/">ШИНЭ ЗАХИАЛГА</MenuItem>
                                <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
                                <MenuItem link="/logout">ГАРАХ</MenuItem>
                            </Fragment>
                        )
                        :
                        (
                            <Fragment>
                                <MenuItem link="/login">НЭВТРЭХ</MenuItem>
                                <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
                            </Fragment>
                        )
                }
            </ul>
        </div>
    )
}
const mapStateToPorps = state => {
    return {
        idToken: state.signupLoginReducer.idToken,
        localId: state.signupLoginReducer.localId
    }
}
export default connect(mapStateToPorps)(Menu);