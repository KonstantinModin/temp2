import {
    PRODUCTS_ARE_LOADED,
    DIFFERENT_PRODUCT_ARE_LOADED,
    ADD_TO_CART,
    REMOVE_FROM_CART} from "./Action_types";

let initialState = {
    all_products : [],
    different_product : [],
    cart_products_list : []
}

let products_reducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_ARE_LOADED : {
            return {
                ...state,
                all_products: action.payload
            }
        }
        case DIFFERENT_PRODUCT_ARE_LOADED : {
            return {
                ...state,
                different_product: action.payload
            }
        }

        default:
            return state;
    }
}

export default products_reducer;