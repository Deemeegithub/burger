const initialState = {
    //Load order
    orders: [],
    loading: false,
    error: null,
    //save Order
    newOrder: {
        saving: false,
        finished: false,
        error: null
    }

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ORDERS_START': return {
            ...state,
            loading: true
        };
        case 'LOAD_ORDERS_SUCCESS': return {
            ...state,
            orders: action.orders,
            loading: false
        };
        case 'LOAD_ORDERS_ERROR': return {
            ...state,
            loading: false,
            error: action.error
        };
        case 'SAVE_ORDER_START': return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: true,
            }
        };
        case 'SAVE_ORDER_SUCCESS': return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: false,
                finished: true,
                error: null
            }
        };
        case 'SAVE_ORDER_ERROR': return {
            ...state,
            newOrder: {
                ...state.newOrder,
                saving: false,
                finished: true,
                error: action.error
            }
        }

        default: return state;
    }
}
export default reducer;