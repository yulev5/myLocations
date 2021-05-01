import { combineReducers } from "redux"
import { categoriesReducer, selectedCategoryReducer } from "./categoriesReducer"
import appStateReducer from "./appStateReducer"

const rootReducer = combineReducers({
    categoriesReducer: categoriesReducer,
    appStateReducer: appStateReducer,
    selectedCategoryReducer: selectedCategoryReducer
})

export default rootReducer;