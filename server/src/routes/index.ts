import { Express } from 'express'
import searchPhrase from './emails';

export default function(app:Express){
  searchPhrase(app)
}