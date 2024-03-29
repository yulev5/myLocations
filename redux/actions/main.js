import * as t from "../actiontypes";

export const addCategory = (categories) => dispatch => {
  dispatch({
    type: t.ADD_CATEGORY,
    payload: categories
  });
}

export const editCategory = (updatedCategory) => dispatch => {
  dispatch({
    type: t.EDIT_CATEGORY,
    payload: updatedCategory
  });
}

export const deleteCategory = (categoryID) => dispatch => {
  dispatch({
    type: t.DELETE_CATEGORY,
    payload: categoryID
  });
}

export const saveSelectedCategory = (categoryId) => dispatch => {
  dispatch({
    type: t.SAVE_SELECTED_CATEGORY,
    payload: categoryId
  });
}

export const setAppState = (currentState) => dispatch => {
  dispatch({
    type: t.CHANGED_STATE,
    payload: currentState
  });
}
