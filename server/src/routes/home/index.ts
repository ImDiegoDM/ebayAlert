import { Express } from 'express'
import get from './get';

const route = '/'

export default function(app:Express){
  app.get(route,get)
}