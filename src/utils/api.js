import {URL} from '../utils/constant';

const checkResponse = (res) => {
  if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

const request = (url, options) => {
  return fetch(url, options).then(checkResponse)
}

export const getIngredients = () => {
  return request (`${URL}/ingredients`)
}

export const getOrderData = (id) => {
  return request (`${URL}/orders`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ingredients: id}),
  })
}