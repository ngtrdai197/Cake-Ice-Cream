import * as typesAction from '../actions/types.action';

const initState = {
  visible: false,
  text: '',
  lable: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case typesAction.VISIBLE_SNACK_BAR:
      return { state, visible: true, text: action.payload };

    case typesAction.INVISIBLE_SNACK_BAR:
      return { state, visible: false, text: '' };

    default:
      return state;
  }
};
