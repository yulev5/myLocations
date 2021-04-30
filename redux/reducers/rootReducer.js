import { combineReducers } from "redux"
import { categoriesReducer } from "./categoriesReducer"
import contextReducer from "./contextReducer"
import { selectedCategoryReducer } from "./selectedCategoryReducer"

const rootReducer = combineReducers({
    categoriesReducer: categoriesReducer,
    contextReducer: contextReducer,
    selectedCategoryReducer: selectedCategoryReducer
})

export default rootReducer;