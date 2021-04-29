import * as t from "../types";

export const selectedCategoryReducer = (state = { currentSelectedCategory: null, }, action) => {

    switch (action.type) {
        case t.SAVE_SELECTED_CATEGORY:
            return {
                ...state,
                currentSelectedCategory: action.payload
            };
        default:
            return { ...state };
    }
}