import { Router } from "express";
import multer from "multer";

import path from 'node:path'

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategories } from "./app/useCases/categories/createCategory";
import { listProduct } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { listOrder } from "./app/useCases/orders/listOrders";
import { createOrder } from "./app/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";

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

router.get('/categories/:categoryId/products', listProductsByCategory);

router.get('/orders', listOrder);

router.post('/orders', createOrder);

router.patch('/orders/:orderId', changeOrderStatus);

router.delete('/orders/:orderId', cancelOrder);
