import { Express } from 'express'
import home from './home';

export default function(app:Express){
  home(app)
}