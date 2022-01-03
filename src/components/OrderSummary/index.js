import React from "react";
import Button from "../General/Button";
import { connect } from "react-redux";
const OrderSummary = (props) => {
    return (
        <div>
            <h3>Таны захиалга </h3>
            <p>Таны сонгосон  орцууд: </p>
            <ul>
                {Object.keys(props.ingredients).map(el => (

                    <li key={el}>{props.ingredientNames[el]} : {props.ingredients[el]}</li>
                ))}
            </ul>
            <p><b>Захиалгын үнэ: {props.totalPrice}₮</b></p>

            <Button btnType="Danger" text="ТАТГАЛЗАХ" OnClickd={props.OnCancel} />
            <Button btnType="Success" text="ҮРГЭЛЖЛҮҮЛЭХ" OnClickd={props.OnContinue} />
        </div>
    )
}
const mapStateToPorps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        ingredientNames: state.burgerReducer.ingredientNames,
        totalPrice: state.burgerReducer.totalPrices
    }
}


export default connect(mapStateToPorps)(OrderSummary);