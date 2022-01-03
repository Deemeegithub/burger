import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import css from "./style.module.css";
import * as actions from "../../redux/actions/orderActions";
import { useNavigate } from "react-router-dom";

function ContactData(props) {
    const [hayag, setHayag] = useState({ name: null, city: null, street: null });

    const ChangeName = e => {
        setHayag({ ...hayag, name: e.target.value });
    }
    const ChangeStreet = e => {
        setHayag({ ...hayag, city: e.target.value });
    }
    const ChangeCity = e => {
        setHayag({ ...hayag, street: e.target.value });
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
            navigate("/orders");
        }
    })

    const SaveOrder = () => {
        const newOrder = {
            localId: props.localId,
            orts: props.ingredients,
            dun: props.price,
            hayag: {
                name: hayag.name,
                city: hayag.city,
                street: hayag.street
            }
        }
        props.saveOrderAction(newOrder);
    }
    return (
        <div className={css.ContactData}>
            <div>
                {props.newOrderStatus.error && `Захиалгыг хадгалах явцад алдаа гарлаа: ${props.newOrderStatus.error}`}
            </div>
            {props.newOrderStatus.saving ? <Spinner /> :
                (
                    <div>
                        <input onChange={ChangeName} type="text" name="name" placeholder="Таны нэр" />
                        <input onChange={ChangeStreet} type="text" name="street" placeholder="Таны гэрийн хаяг" />
                        <input onChange={ChangeCity} type="text" name="city" placeholder="Таны хот" />
                        <Button text="ИЛГЭЭХ" btnType="Success" OnClickd={SaveOrder} />
                    </div>
                )
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        price: state.burgerReducer.totalPrice,
        newOrderStatus: state.orderReducer.newOrder,
        localId: state.signupLoginReducer.localId
    }
}
const mapDispachToProps = dispatch => {
    return {
        saveOrderAction: (newOreder) => dispatch(actions.saveOrder(newOreder))
    }
}
export default connect(mapStateToProps, mapDispachToProps)(ContactData);