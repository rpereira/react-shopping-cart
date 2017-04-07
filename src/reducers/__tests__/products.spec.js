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

      expect(products({}, action)).toEqual(stock);
    });
  });
});
