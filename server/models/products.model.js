const prisma = require('../config/prisma');

const getProductList = async (parent, agrs, ctx) => {
  const products = await ctx.prisma.products.findMany();
  return products;
};

const findProduct = async (parent, { productId }, ctx) => {
  const product = await ctx.prisma.products.findOne({
    where: {
      productId,
    },
  });
  return product;
};

const findSubCategory = async (parent, agrs, ctx) => {
  const subCategory = await ctx.prisma.subCategory.findOne({
    where: {
      subCateId: parent.subCateId,
    },
  });
  return subCategory;
};

const findCategory = async (parent, agrs, ctx) => {
  const category = await ctx.prisma.category.findOne({
    where: {
      categoryId: parent.categoryId,
    },
  });
  return category;
};

module.exports = {
  getProductList,
  findProduct,
  findSubCategory,
  findCategory,
};
