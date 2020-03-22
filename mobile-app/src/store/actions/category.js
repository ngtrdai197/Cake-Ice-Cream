import { api } from '../../@api';

import * as typesAction from './types.action';

export const getAllCategory = () => async dispatch => {
  try {
    console.log(`running ....`);
    const respon = await api
      .get(`/category?populate=products`)
      .then(res => res.data);
    dispatch(getAllCategorySucess(respon));
  } catch (error) {
    dispatch(getAllCategoryFail(error.response));
  }
};
const getAllCategorySucess = categories => {
  return {
    type: typesAction.GET_ALL_CATEGORY_SUCCESS,
    payload: categories
  };
};
const getAllCategoryFail = error => {
  return {
    type: typesAction.GET_ALL_CATEGORY_FAIL,
    payload: error
  };
};
