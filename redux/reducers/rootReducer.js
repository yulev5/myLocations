import { combineReducers } from "redux"
import main from "./main"
import categories from "./categories"

const rootReducer = combineReducers({
    main: main,
    categories: categories
})

export default rootReducer;