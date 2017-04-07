import products from './products.json';

/**
 * Mock client-server interaction.
 */
const TIMEOUT = 100;

const getProducts = cb => setTimeout(() => cb(products), TIMEOUT);
const buyProducts = (payload, cb) => setTimeout(() => cb(), TIMEOUT);

export default {
  getProducts,
  buyProducts,
};
