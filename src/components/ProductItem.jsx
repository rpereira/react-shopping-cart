// @flow

import React from 'react';

import Product from './Product';
import type { Product as TProduct } from './Product';

type Props = {
  product: TProduct,
};

function ProductItem(props: Props) {
  return (
    <div>
      <Product
        title={props.product.title}
        price={props.product.price}
      />
    </div>
  );
}

export default ProductItem;
