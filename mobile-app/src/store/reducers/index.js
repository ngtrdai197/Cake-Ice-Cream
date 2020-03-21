import { combineReducers } from 'redux';

import ordersReducer from './order.reducer';
import snackBarReducer from './snack-bar.reducer';
export const allReducers = combineReducers({
  ordersReducer,
  snackBar: snackBarReducer
});
