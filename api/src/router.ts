import { Router } from "express";
import multer from "multer";

import path from 'node:path'

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategory";
import { listProduct } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
})

router.get('/categories', listCategories);

router.post('/categories', createCategories);

router.get('/products', listProduct);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok');
});

router.get('/orders', (req, res) => {
  res.send('Ok');
});

router.post('/orders', (req, res) => {
  res.send('Ok');
});

router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});
