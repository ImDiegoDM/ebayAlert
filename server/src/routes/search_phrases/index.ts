import { Express } from 'express';
import del from './delete';
import getAll from './get_all';
import getOne from './get_one';
import getProducts from './get_products_phrase';
import post from './post';
import put from './put';

const route = '/search_phrases';

export default function(app: Express) {
  app.get(route, getAll);
  app.post(route, post);
  app.get(route + '/:id', getOne);
  app.put(route + '/:id', put);
  app.delete(route + '/:id', del);
  app.get(route + '/:id/products', getProducts);
}
