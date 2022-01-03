import React from "react";
import css from "./style.module.css";
const BurgerIngredient = (props) => {
    if (props.type === 'BreadTop') return (
        <div className={css.BreadTop}>
            <div className={css.seed}></div>
            <div className={`${css.seed} ${css.second}`}></div>
            <div className={`${css.seed} ${css.third}`}></div>
            <div className={`${css.seed} ${css.fourth}`}></div>
        </div>
    );
    if (props.type === 'Salad') return <div className={css.Salad}></div>;
    if (props.type === 'bacon') return <div className={css.bacon}></div>;
    if (props.type === 'cheese') return <div className={css.cheese}></div>;
    if (props.type === 'meat') return <div className={css.meat}></div>;
    if (props.type === 'BreadBottom') return <div className={css.BreadBottom}></div>;



    return <div>...</div>;
}
export default BurgerIngredient;