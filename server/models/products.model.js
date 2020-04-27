const prisma = require('../config/prisma');

const getProductList = async () => {
  const products = await prisma.products.findMany();
  return products;
};

const findProduct = async (parent, { productId, categoryName }) => {
  const product = await prisma.category
    .findOne({
      where: {
        categoryName,
      },
    })
    .products({
      where: {
        productId,
      },
    });
  return product[0];
};

const findProductImages = async parent => {
  const product = await prisma.images.findMany({
    where: {
      productId: parent.productId,
    },
  });
  return product;
};

const findProductOfCategory = async (parent, { categoryName }) => {
  const products = await prisma.category
    .findOne({
      where: {
        categoryName,
      },
    })
    .products();
  return products;
};

// const findSubCategory = async (parent, agrs) => {
//   const subCategory = await prisma.subCategory.findOne({
//     where: {
//       subCateId: parent.subCateId,
//     },
//   });
//   return subCategory;
// };

const findCategory = async parent => {
  const { categoryId } = parent;
  const category = await prisma.category.findOne({
    where: {
      categoryId,
    },
  });
  return category;
};

module.exports = {
  getProductList,
  findProduct,
  findCategory,
  findProductImages,
  findProductOfCategory,
};
