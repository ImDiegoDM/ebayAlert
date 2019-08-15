import express from 'express'
import routes from './routes';
import bodyParser from 'body-parser'

const port = 3000;
const app = express();

app.use(bodyParser.json())

routes(app);

app.listen(port,()=>{
  console.log(`The server is runing on port ${port}`)
});