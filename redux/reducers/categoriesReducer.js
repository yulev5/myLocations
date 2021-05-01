import * as t from "../types";

export const categoriesReducer = (state = { categories: [], }, action) => {

    switch (action.type) {
        case t.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case t.EDIT_CATEGORY: {
            const index = state.categories.findIndex(cat => cat.id === action.payload.id);
            const updatedCategories = [...state.categories];
            updatedCategories[index].name = action.payload.name;
            return {
                ...state,
                categories: updatedCategories,
            }
        }

        case t.DELETE_CATEGORY: {
            const index = state.categories.findIndex(cat => cat.id === action.payload);
            const updatedCategories = [
                ...state.categories.slice(0, index),
                ...state.categories.slice(index + 1)
            ];
            return {
                ...state,
                categories: updatedCategories,
            }
        }

        default:
            return { ...state };
    }
}

export const selectedCategoryReducer = (state = { currentSelectedCategoryId: null, }, action) => {

    switch (action.type) {
        case t.SAVE_SELECTED_CATEGORY:
            return {
                ...state,
                currentSelectedCategoryId: action.payload
            };
        default:
            return { ...state };
    }
}