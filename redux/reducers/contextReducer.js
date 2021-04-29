import { INITIAL_CONTEXT } from "../contextTypes";
import * as t from "../types";

const contextReducer = (state = { currentContext: INITIAL_CONTEXT, }, action) => {
    switch (action.type) {
        case t.CHANGED_CONTEXT:
            return {
                ...state,
                currentContext: action.payload
            };
        default:
            return { ...state };
    }
}

export default contextReducer;