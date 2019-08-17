import { Express } from 'express';
import searchPhrase from './search_phrases';

export default function(app: Express) {
  searchPhrase(app);
}
