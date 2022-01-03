import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { connect } from "react-redux";

const Burger = props => {
    //let content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>;
    // props.orts {bacon: 2, cheese: 2, meat: 1, salad: 1} 
    const items = Object.entries(props.orts); //masew bolgoj avch baina []
    let content = [];
    items.map((el, index) => {
        for (let i = 0; i < el[1]; i++) {
            content.push(<BurgerIngredient key={`${index}${i}`} type={el[0]} />);
        }
        return content;
    });
    if (content.length === 0) { content = <p>Хачиртай талхныхаа орцыг сонгоно уу...</p>; }

    return (
        <div className={css.burger}>
            <BurgerIngredient type="BreadTop" />
            {content}
            {/* <BurgerIngredient type="Salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="BreadBottom" />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        orts: state.burgerReducer.ingredients,
    }
}
export default connect(mapStateToProps)(Burger);