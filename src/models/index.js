// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Discount, Product, ProductInventory, ProductCategory } = initSchema(schema);

export {
  Discount,
  Product,
  ProductInventory,
  ProductCategory
};