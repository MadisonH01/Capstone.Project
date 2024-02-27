const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById, sortProducts, getAllCategories, getSpecificCategory } = require();

// GET - /products - get all products
router.get('/', async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.send(products);
    } catch (error) {
        next(error);
    }
});

// GET - /products/:id - get a single product by id
router.get('/:id', async (req, res, next) => {
    try {
        const product = await getProductById(req.params.id);
        res.send(product);
    } catch (error) {
        next(error);
    }
});

// GET - /products?sort=desc - sort products
router.get('/sort=desc', async (req, res, next) => {
    try {
        const sortedProducts = await sortProducts();
        res.send(sortedProducts);
    } catch (error) {
        next(error);
    }
});

//GET - /products/categories - get all categories
router.get('/categories', async (req, res, next) => {
    try {
        const categories = await getAllCategories();
        res.send(categories);
    } catch (error) {
        next(error);
    }
});

//GET -/products/category/:categoryName - get specific category
router.get('/category/:categoryName', async (req, res, next) => {
    try {
        const category = await getSpecificCategory(req.params.categoryName);
        res.send(category);
    } catch (error) {
        next(error);
    }
});

module.exports = router;