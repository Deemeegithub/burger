const initialState = {
    ingredients: {
        Salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 1000,
    purchasing: true,
    ingredientNames: {
        Salad: 'Салад',
        bacon: 'Гайхан мах',
        cheese: 'Бяслаг',
        meat: 'Үхрийн мах'
    }
};
const INGREDIENTS_PRICE = { Salad: 150, cheese: 250, bacon: 800, meat: 1500 }

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD_INGREDIENT') {
        const OrtsNer = action.ortsNer; const NH = +1; const ortsDun = +INGREDIENTS_PRICE[OrtsNer];
        return (nemhHasah(OrtsNer, NH, ortsDun));
    } else if (action.type === 'REMOVE_INGREDIENT') {
        const OrtsNer = action.ortsNer; const NH = -1; const ortsDun = -INGREDIENTS_PRICE[OrtsNer];
        return (nemhHasah(OrtsNer, NH, ortsDun));
    }
    function nemhHasah(OrtsNer, nemhHasah, ortsDun, purchasing) {
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [OrtsNer]: state.ingredients[OrtsNer] + nemhHasah
            },
            totalPrice: state.totalPrice + ortsDun,
            purchasing: state.totalPrice + ortsDun <= 1000 //1000 baga bol false utga ugnu ih bol true utga ugnu
        }
    };

    return state;
}
export default reducer;