import { combineReducers } from "redux"
import main from "./main"
import categories from "./categories"
import contextReducer from "./contextReducer"

const rootReducer = combineReducers({
    main: main,
    categories: categories,
    contextReducer: contextReducer
})

export default rootReducer;