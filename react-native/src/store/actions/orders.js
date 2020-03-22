import { isNil } from 'lodash';

import * as typesAction from './types.action';

export const addToCart = product => dispatch => {
  if (isNil(product)) return;
  dispatch({
    type: typesAction.ADD_PRODUCT,
    payload: product
  });
};

export const increment = id => dispatch => {
  dispatch({
    type: typesAction.INCREAMENT,
    payload: id
  });
};

export const decrement = id => dispatch => {
  dispatch({
    type: typesAction.DECREMENT,
    payload: id
  });
};
