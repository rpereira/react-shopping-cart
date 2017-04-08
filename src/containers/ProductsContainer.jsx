import React from 'react';
import { connect } from 'react-redux';

import { getAllProducts } from '../reducers/products';

import ProductsList from '../components/ProductsList';
import ProductItem from '../components/ProductItem';

import type { TProduct } from '../components/Product';

type Props = {
  products: Array<TProduct>,
};

function ProductsContainer(props: Props) {
  return (
    <ProductsList title="Products list">
      { props.products.map(p =>
        <ProductItem
          key={p.id}
          product={p}
        />,
      )}
    </ProductsList>
  );
}

function mapStateToProps(state) {
  return {
    products: getAllProducts(state.products),
  };
}

export default connect(
  mapStateToProps,
)(ProductsContainer);
