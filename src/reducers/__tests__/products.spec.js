import products from '../products';
import { receiveProducts } from '../../actions/products';

describe('reducers', () => {
  describe('#products', () => {
    it('should handle RECEIVE_PRODUCTS action', () => {
      const stock = [
        { id: 1, title: 'product #1' },
        { id: 2, title: 'product #2' },
      ];
      const action = receiveProducts(stock);
      const normalizedState = {
        byId: {
          1: {
            id: 1,
            title: 'product #1'
          },
          2: {
            id: 2,
            title: 'product #2'
          }
        },
        allIds: [1, 2]
      };

      expect(products({}, action)).toEqual(normalizedState);
    });
  });
});
