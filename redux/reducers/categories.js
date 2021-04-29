import * as t from "../types";

export const categories = (state = { categories: [], }, action) => {
    switch (action.type) {
        case t.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            };
        default:
            return { ...state };
    }
}