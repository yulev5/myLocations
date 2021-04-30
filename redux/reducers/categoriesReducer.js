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
            const index = state.categories.findIndex(cat => cat.id === action.payload.id);
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


        // case t.ADD_CATEGORY:
        //     const index = state.categories.findIndex(cat => cat.id === action.payload.id);
        //     if (index < 0) { //add new category
        // return {
        //     ...state,
        //     categories: [...state.categories, action.payload]
        // };
        //     } else { //update category name
        // const updatedCategories = [...state.categories];
        // updatedCategories[index].name = action.payload.name;
        // return {
        //     ...state,
        //     categories: updatedCategories,
        // }
        //     }