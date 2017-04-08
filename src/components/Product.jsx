// @flow

import React from 'react';

/* eslint-disable react/no-unused-prop-types */

export type TProduct = {
  id: number,
  title: string,
  subtitle: string,
  price: number,
  priceDiscounted: number,
  image: string
};

function Product(props: TProduct) {
  return (
    <div>
      {props.title}
      <div>
        {props.subtitle}
      </div>
    </div>
  );
}

export default Product;
