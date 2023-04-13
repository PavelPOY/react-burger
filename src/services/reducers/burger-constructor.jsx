import { ADD_BUN, ADD_OTHER_INGREDIENT, DELETE_OTHER_INGREDIENT, SWAP_INGREDIENT } from '../actions/burger-constructor'; 

const initialState = {
  bun: { price:0 },
  other: [],
  contralPrice: 0
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        bun: action.bun,
        contralPrice: state.contralPrice - state.bun.price * 2 + action.bun.price * 2
      };
    }

    case ADD_OTHER_INGREDIENT: {
      return {
        ...state,
        other: [...state.other, action.other],
        contralPrice: state.contralPrice + action.other.price
      };
    }

    case DELETE_OTHER_INGREDIENT: {
      return {
        ...state,
        other: state.other.filter(other => other.id !== action.other.id),
        contralPrice: state.contralPrice - action.other.price
      };
    }

    case SWAP_INGREDIENT: { 
      const dragOther = [...state.other];
      const targetOther = dragOther.splice(action.dropIndex, 1)[0];
      dragOther.splice(action.dragIndex, 0, targetOther);
      return {
        ...state,
        other: dragOther,
      };
    }

    default: {
      return state;
    }
  }
};