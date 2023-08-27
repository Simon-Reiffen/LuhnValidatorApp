import express from 'express'
import path from 'path'
import template from './src/template'
import ssr from './src/server'
import logger from './logger'
import isValidLuhn from './src/server/luhn'

const app = express()

app.use(express.json());

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.listen(process.env.PORT || 3000);
logger.info(`Listening on port ${process.env.PORT || 3000}`);

app.get('/', (req, res) => {
  const content  = ssr();
  const response = template("Credit Card Validator", content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

app.post('/api/validate', (req, res) => {
  const { ccn } = req.body;
  console.log('ccn: ', ccn)
  logger.info('Validating credit card number: ' + ccn)
  res.send(isValidLuhn(ccn));
});

