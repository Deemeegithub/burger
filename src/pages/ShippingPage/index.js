import React from "react";
// import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { Route, Routes, useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { useNavigate } from 'react-router-dom';
import css from "./style.module.css";
import ContactData from "../../components/ContactData";
function ShippingPage(props) {
    const navigate = useNavigate();

    // const [ingredients, setIngredients] = useState({ Salad: 0, cheese: 0, bacon: 0, meat: 0 });
    // const [price, setPrice] = useState(0);
    // const [searchParams] = useSearchParams();
    // var ingredientsSet = {}; let dun = 0;
    // for (let param of searchParams.entries()) {
    //     if (param[0] === 'dun') {
    //         dun = param[1];
    //     } else {
    //         ingredientsSet[param[0]] = param[1];
    //     }
    // }

    // useEffect(() => {
    //     async function ingredientsfun() {
    //         setIngredients(ingredientsSet);
    //         setPrice(dun);
    //     }
    //     ingredientsfun();
    // }, []);
    const showContactData = () => {
        navigate("/ship/contact", { replace: true });
    }
    return (
        <div className={css.ShippingPage}>
            <p style={{ fontSize: "18px" }}><b>ТАНЫ ЗАХИАЛГА АМТТАЙ БАЙХ БОЛНО ГЭЖ НАЙДАЖ БАЙНА....</b></p>
            <p style={{ fontSize: "18px" }}><b>Дүн: {props.price}₮</b></p>
            <Burger />
            {/* <Burger orts={ingredients} /> */}
            <Button OnClickd={() => navigate(-1)} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
            <Button OnClickd={() => showContactData()} btnType="Success" text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ" />
            <Routes>
                <Route path="contact" element={<ContactData />} />
            </Routes>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        price: state.burgerReducer.totalPrice
    }
}
export default connect(mapStateToProps)(ShippingPage);

