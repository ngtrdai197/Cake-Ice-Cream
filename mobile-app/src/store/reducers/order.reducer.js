import { get, findIndex, cloneDeep } from 'lodash';
import * as typeActions from '../actions/types.action';

const initState = {
  orders: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case typeActions.ADD_PRODUCT: {
      const orders = get(state, 'orders');
      const payload = get(action, 'payload');
      const index = orders.findIndex(rec => rec.id === payload.id);
      if (index === -1) {
        payload.quantity = 1;
        payload.amount = payload.price;
        orders.push(payload);
        return { ...state, orders };
      }
      return state;
    }

    case typeActions.INCREAMENT: {
      const id = get(action, 'payload');
      const orders = get(state, 'orders') || [];
      const index = findIndex(orders, rec => rec.id === id);
      if (index !== -1) {
        orders[index].quantity++;
      } else {
        orders[index].quantity = 1;
      }
      orders[index].amount = calculateAmount(orders[index]);
      return { ...state, orders };
    }

    case typeActions.DECREMENT: {
      const id = get(action, 'payload');
      const orders = get(state, 'orders') || [];
      const index = findIndex(orders, rec => rec.id === id);
      if (index === -1) return state;
      if (orders[index].quantity > 1) {
        orders[index].quantity--;
        orders[index].amount = calculateAmount(orders[index]);
      } else {
        orders.splice(index, 1);
      }
      return { ...state, orders };
    }
    default:
      return state;
  }
};

const calculateAmount = product => {
  return product.price * product.quantity;
};
