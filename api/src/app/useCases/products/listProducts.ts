import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function listProduct(req: Request, res: Response) {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch(e) {
    res.sendStatus(400);
  }
}
