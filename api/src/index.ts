import express from 'express';
import mongoose from 'mongoose';

import path from 'node:path'

import { router } from './router';

mongoose.connect('mongodb+srv://frednogueira:Mks2024@wapp.zbkbznq.mongodb.net/?retryWrites=true&w=majority&appName=WApp')
  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Running: http://localhost:${port}`)
    })

  })
  .catch(() => console.log('Erro ao conectar com o mongodb'));
