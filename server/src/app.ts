import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import cron from 'node-cron';
import { handleCron } from './handleCron';
import routes from './routes';

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(port, () => {
  console.log(`The server is runing on port ${port}`);
});

cron.schedule('* * * * *', handleCron);
