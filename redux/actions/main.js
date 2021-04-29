import * as t from "../types";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: t.SET_NAME,
    payload: name
  });
}

export const addCategory = (categories) => dispatch => {
  dispatch({
    type: t.ADD_CATEGORY,
    payload: categories
  });
}

export const saveSelectedCategory = (categoryId) => dispatch => {
  dispatch({
    type: t.SAVE_SELECTED_CATEGORY,
    payload: categoryId
  });
}

export const setContext = (currentContext) => dispatch => {
  dispatch({
    type: t.CHANGED_CONTEXT,
    payload: currentContext
  });
}
