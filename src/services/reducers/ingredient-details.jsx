import { OPEN_INGREDIENT, CLOSE_INGREDIENT } from '../actions/ingredient-details';

const initialState = {
  ingredient: null,
  openIngredient: false,
  closeIngredient: false
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient,
        openIngredient: true
      };
    }

    case CLOSE_INGREDIENT: {
      return {
        ...initialState,
        ingredient: action.ingredient,
        closeIngredient: true
      };
    }

    default: {
      return state;
    }
  }
};