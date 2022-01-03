import React from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import BuildControl from "../BurgerControl";
import * as actions from "../../redux/actions/burgerActions";
const BuildControls = props => {

    const disabledingredients = { ...props.ingredients };
    for (let key in disabledingredients) {
        disabledingredients[key] = disabledingredients[key] <= 0;
    }
    return (

        <div className={css.BuildControls}>

            <p>Бургерийн үнэ: <b>{props.totalPrice}</b></p>
            {
                Object.keys(props.ingredientNames).map(el => (
                    <BuildControl
                        key={el}
                        type={el} orts={props.ingredientNames[el]}
                        ortsNemeh={props.ortsNemeh}
                        ortsHasah={props.ortsHasah}
                        disabled={disabledingredients} />
                ))
            }
            <button disabled={props.purchasing} className={css.OrderButton} onClick={props.showComfirmmodal}>Захиалах</button>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        totalPrice: state.burgerReducer.totalPrice,
        purchasing: state.burgerReducer.purchasing,
        ingredientNames: state.burgerReducer.ingredientNames,
    }
}
const mapDispachToProps = dispach => {
    return {
        ortsNemeh: ortsNer => dispach(actions.addIngredient(ortsNer)),
        ortsHasah: ortsNer => dispach(actions.removeIngredient(ortsNer)),
    }
}
export default connect(mapStateToProps, mapDispachToProps)(BuildControls);
