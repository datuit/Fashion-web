// const { buildSchema } = require('graphql');
const { gql } = require('apollo-server-express');
const {
  getProductList,
  findProduct,
  findCategory,
  findProductImages,
  findProductOfCategory,
} = require('./products.model');

const schema = gql`
  type Query {
    hello: String
    products: [Product]
    product(productId: Int!, categoryName: String!): Product
    productsCategory(categoryName: String!): [Product]
  }
  type Product {
    productId: Int
    productName: String
    productImages: [Image]
    productNote: String
    productPrice: Float
    productCost: Float
    productSku: String
    productDecription: String
    categoryId: Int
    category: Category
  }
  type Category {
    categoryId: Int
    categoryName: String
  }
  type Image {
    imageId: Int
    imageSrc: String
    productId: Int
  }
`;

const root = {
  Query: {
    products: getProductList,
    product: findProduct,
    productsCategory: findProductOfCategory,
  },
  Product: {
    productImages: findProductImages,
    category: findCategory,
  },
};

module.exports = {
  schema,
  root,
};
