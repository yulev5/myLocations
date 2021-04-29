import { combineReducers } from "redux"
import main from "./main"
import { categories } from "./categories"
import contextReducer from "./contextReducer"
import { selectedCategoryReducer } from "./selectedCategoryReducer"

const rootReducer = combineReducers({
    main: main,
    categories: categories,
    contextReducer: contextReducer,
    selectedCategoryReducer: selectedCategoryReducer
})

export default rootReducer;