import * as t from "../types";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: t.SET_NAME,
    payload: name
  });
}

export const setCategory = (categories) => dispatch => {
  dispatch({
    type: t.ADD_CATEGORY,
    payload: categories
  });
}

export const setContext = (currentContext) => dispatch => {
  dispatch({
    type: t.CHANGED_CONTEXT,
    payload: currentContext
  });
}
