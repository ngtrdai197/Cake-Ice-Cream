import * as typeActions from '../actions/types.action';

const initState = {
  categories: [],
  error: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case typeActions.GET_ALL_CATEGORY_SUCCESS: {
      return { ...state, categories: action.payload };
    }

    case typeActions.GET_ALL_CATEGORY_FAIL: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};
