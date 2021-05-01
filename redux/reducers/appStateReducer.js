import { INITIAL_STATE } from "../appStateTypes";
import * as t from "../actiontypes";

const appStateReducer = (state = { currentAppState: INITIAL_STATE, }, action) => {

    switch (action.type) {
        case t.CHANGED_STATE:
            return {
                ...state,
                currentAppState: action.payload
            };
        default:
            return { ...state };
    }
}

export default appStateReducer;