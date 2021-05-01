import { combineReducers } from "redux"
import { categoriesReducer, selectedCategoryReducer } from "./categoriesReducer"
import contextReducer from "./contextReducer"

const rootReducer = combineReducers({
    categoriesReducer: categoriesReducer,
    contextReducer: contextReducer,
    selectedCategoryReducer: selectedCategoryReducer
})

export default rootReducer;