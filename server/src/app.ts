import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const port = 3000;
const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
  console.log(`The server is runing on port ${port}`);
});
