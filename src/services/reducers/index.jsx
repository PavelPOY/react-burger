import { combineReducers } from 'redux';
import { burgerConstructorReducer } from './burger-constructor';
import { burgerIngredientsReducer } from './burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { orderDetailsReducer } from './order-details';

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  orderDetails: orderDetailsReducer,
});

export const getBurgerIngredients = (store) => store.burgerIngredients;
export const getBurgerConstructor = (store) => store.burgerConstructor;
export const getIngredientDetails = (store) => store.ingredientDetails;
export const getOrderDetails = (store) => store.orderDetails;
