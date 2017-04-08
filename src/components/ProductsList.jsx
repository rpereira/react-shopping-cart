// @flow

import React from 'react';

import type { Children } from 'react';

type Props = {
  title: string,
  children: Children
};

function ProductsList(props: Props) {
  return (
    <div>
      <h3>{ props.title }</h3>
      <div>{ props.children }</div>
    </div>
  );
}

export default ProductsList;
