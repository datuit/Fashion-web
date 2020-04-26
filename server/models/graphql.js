// const { buildSchema } = require('graphql');
const { gql } = require('apollo-server-express');
const {
  getProductList,
  findProduct,
  findCategory,
  findSubCategory,
} = require('./products.model');

const schema = gql`
  type Query {
    hello: String
    products: [Product]
    product(productId: Int!): Product
  }
  type Product {
    productId: Int
    productName: String
    productNote: String
    productPrice: Float
    productCost: Float
    productSku: String
    productDecription: String
    subCateId: Int
    subCategory: SubCategory
  }
  type SubCategory {
    categoryId: Int
    subCateId: Int
    subCateName: String
    category: Category
  }
  type Category {
    categoryId: Int
    categoryName: String
  }
`;

const root = {
  Query: {
    products: getProductList,
    product: findProduct,
  },
  Product: {
    subCategory: findSubCategory,
  },
  SubCategory: {
    category: findCategory,
  },
};

module.exports = {
  schema,
  root,
};
