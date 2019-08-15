import { Express } from 'express'
import get from './get';
import post from './post';

const route = '/emails'

export default function(app:Express){
  app.get(route,get);
  app.post(route,post);
}