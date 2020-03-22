import * as typesAction from './types.action';

export const visible = text => dispatch => {
  dispatch({
    type: typesAction.VISIBLE_SNACK_BAR,
    payload: text
  });
};

export const inVisible = () => dispatch => {
  dispatch({
    type: typesAction.INVISIBLE_SNACK_BAR
  });
};
