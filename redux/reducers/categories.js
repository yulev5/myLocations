import * as t from "../types";
import update from 'immutability-helper'

export const categories = (state = { categories: [], }, action) => {
    switch (action.type) {
        case t.ADD_CATEGORY:
            const index = state.categories.findIndex(cat => cat.id === action.payload.id);
            if (index < 0) { //add new category
                return {
                    ...state,
                    categories: [...state.categories, action.payload]
                };
            } else { //update category name
                const updatedCategories = [...state.categories];
                updatedCategories[index].name = action.payload.name;
                return {
                    ...state,
                    categories: updatedCategories,
                }
            }

        default:
            return { ...state };
    }
}