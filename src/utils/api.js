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