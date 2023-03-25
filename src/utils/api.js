export const getIngredients = (URL) => {
  return fetch (URL)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
}

export const getOrderData = (URL,id) => {
  return fetch (URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ingredients: id}),
  })
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
}