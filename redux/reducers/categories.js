import * as t from "../types";

const categories = (state = { categories: [], }, action) => {
    switch (action.type) {
        case t.ADD_CATEGORY:
            return {
                ...state,
                categories: action.payload
            };
        default:
            return { ...state };
    }
}

export default categories;