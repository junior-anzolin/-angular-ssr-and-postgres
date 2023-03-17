import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { join } from 'path';
import { loadRoutes } from 'server/routes';
import { connection } from './server/database/connection';
import { AppServerModule } from './src/main.server';

const app = express();

const PORT = Number(process.env['PORT'] || 4000);
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModule, // Give it a module to bootstrap
  })
);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get(
  '*.*',
  express.static(DIST_FOLDER, {
    maxAge: '1y',
  })
);

connection
  .initialize()
  .then(() => {
    console.log('Success in connection of DB');
  })
  .catch((error) => console.log('Error in connection of DB', error));

loadRoutes(app);

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(
    'Error in serve Angular',
    `Server connected on http://localhost:${PORT}`
  );
});
