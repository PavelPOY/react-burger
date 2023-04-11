import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED, CLOSE_ORDER} from '../actions/order-details';


const initialState = {
  order: null,
  orderRequest: false,
  orderSuccess: false,
  orderFailed: false,
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderSuccess: false,
        orderFailed: false
      };
    }

    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderFailed: false,
        orderSuccess: true,
        orderRequest: false
      };
    }

    case GET_ORDER_FAILED: {
      return initialState;
    }

    case CLOSE_ORDER: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};