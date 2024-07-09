import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrder(req: Request, res: Response) {
  try {
    const order = await Order.find()
    .sort({ createdAt: 1 })
    .populate('products.product');

    res.status(200).json(order);
  } catch(e) {
    res.sendStatus(400);
  }
}
