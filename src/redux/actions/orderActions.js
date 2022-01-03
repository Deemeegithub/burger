import axios from "../../axios-orders";
export const loadOrders = localId => {
    return function (dispatch, getState) {
        dispatch(loadOrdersStart());
        const token = getState().signupLoginReducer.idToken; // бас getState гээд индээсээ шууд авах боломжтой 
        axios.get(`orders.json?auth=${token}&orderBy="localId"&equalTo="${localId}"`).then(response => {
            dispatch(loadOrdersSuccess(Object.entries(response.data).reverse()));

        }).catch(err => dispatch(loadOrdersError(err))); // finally() then catch алинч ажилсан хамаагүй дараан ажилдаг
    }
};
export const loadOrdersStart = () => {
    return {
        type: "LOAD_ORDERS_START"
    }
}

export const loadOrdersSuccess = (loadedOrders) => {
    return {
        type: "LOAD_ORDERS_SUCCESS",
        orders: loadedOrders
    }
}
export const loadOrdersError = (error) => {
    return {
        type: "LOAD_ORDERS_ERROR",
        error: error
    }
}
export const saveOrder = (newOrder) => {
    return function (dispatch, getState) {
        dispatch(saveOrderStart());
        const token = getState().signupLoginReducer.idToken;
        axios.post(`/orders.json?auth=${token}`, newOrder)
            .then(response => {
                dispatch(saveOrderSuccess())
            }).catch(error => dispatch(saveOrderError(error)));
    }
}
export const saveOrderStart = () => {
    return {
        type: "SAVE_ORDER_START"
    }
}
export const saveOrderSuccess = () => {
    return {
        type: "SAVE_ORDER_SUCCESS"
    }
}
export const saveOrderError = (error) => {
    return {
        type: "SAVE_ORDER_ERROR",
        error
    }
}