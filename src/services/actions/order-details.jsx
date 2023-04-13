import { getOrderData } from '../../utils/api'

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const CLOSE_ORDER = 'CLOSE_ORDER';

export function getOrder(id) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_REQUEST });
    getOrderData(id)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          order: res.order.number,
        });
      })
      .catch((eror) => {
        dispatch({ type: GET_ORDER_FAILED });
        console.log(`Ошибка! ${eror}`)
      })
  };
}