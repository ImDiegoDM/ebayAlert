import { Express } from 'express';
import getAll from './get_all';
import post from './post';

const route = '/search_phrases';

export default function(app: Express) {
  app.get(route, getAll);
  app.post(route, post);
}
