import { combineReducers } from 'redux';

function byId(state = {}, action) {
  if (action.type === 'RECEIVE_PRODUCTS') {
    return {
      ...state,
      ...action.payload.products.reduce((obj, product) => {
        // eslint-disable-next-line no-param-reassign
        obj[product.id] = product;
        return obj;
      }, {}),
    };
  }

  const { productId } = action;
  if (productId) {
    return {
      ...state,
      [productId]: state[productId],
    };
  }
  return state;
}

function allIds(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS': {
      const productIds = xs => xs.map(x => x.id);
      return productIds(action.payload.products);
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});

export function getProduct(state, id) {
  return state.byId[id];
}

export function getAllProducts(state) {
  return state.allIds.map(id => getProduct(state, id));
}
