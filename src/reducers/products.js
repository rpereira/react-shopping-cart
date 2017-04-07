const initialState = {
  products: [],
};

function products(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.payload.products;

    default:
      return state;
  }
}

export default products;
