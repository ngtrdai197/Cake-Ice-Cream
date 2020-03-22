import { combineReducers } from 'redux';

import ordersReducer from './order.reducer';
import snackBarReducer from './snack-bar.reducer';
import categoryReducer from './category.reducer';

export const allReducers = combineReducers({
  ordersReducer,
  snackBar: snackBarReducer,
  categoryReducer
});
