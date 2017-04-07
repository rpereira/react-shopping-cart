import store from '../api/store';

export function receiveProducts(products) {
  return {
    type: 'RECEIVE_PRODUCTS',
    payload: { products },
  };
}

export function getAllProducts() {
  return dispatch => store.getProducts(products => dispatch(receiveProducts(products)));
}
