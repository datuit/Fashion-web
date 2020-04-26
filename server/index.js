/* eslint consistent-return:0 import/order:0 */
require('dotenv').config();
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const { ApolloServer } = require('apollo-server-express');
const logger = require('./logger');

const passport = require('passport');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// const {
//   connection,

//   // session
// } = require('./config/session');
const apiRouter = require('./routes/api.route');
const { schema, root } = require('./models/graphql');
const prisma = require('./config/prisma');

class App {
  constructor() {
    this.appExpress = express();
  }

  connectDB() {
    // eslint-disable-next-line func-names
    // connection.connect(err => {
    //   if (err) {
    //     return logger.error(`error connecting: ${err.stack}`);
    //   }
    //   // eslint-disable-next-line no-console
    //   console.log('connected mysqls');
    // });
  }

  applyMiddleware() {
    const { appExpress } = this;
    appExpress.use(passport.initialize());
    // eslint-disable-next-line global-require
    // require('./config/passpost')(passport);
    // appExpress.use(session);
    appExpress.use(express.json());
    appExpress.use(express.urlencoded({ extended: true }));
    // appExpress.use(passport.initialize());
    // If you need a backend, e.g. an API, add your custom backend-specific middleware here
    // appExpress.use('/api', myApi);
    // appExpress.use(
    //   '/graphql',
    //   graphqlHTTP({
    //     schema,
    //     rootValue: root,
    //     graphiql: true,
    //   }),
    // );
    const server = new ApolloServer({
      typeDefs: schema,
      resolvers: root,
      context: {
        prisma,
      },
    });
    server.applyMiddleware({ app: appExpress, path: '/graphql' });

    appExpress.use('/api', apiRouter);

    // In production we need to pass these values in instead of relying on webpack
    setup(this.appExpress, {
      outputPath: resolve(process.cwd(), 'build'),
      publicPath: '/',
    });

    // use the gzipped bundle
    appExpress.get('*.js', (req, res, next) => {
      req.url = req.url + '.gz'; // eslint-disable-line
      res.set('Content-Encoding', 'gzip');
      next();
    });
  }

  run() {
    const { appExpress } = this;
    appExpress.listen(port, host, async err => {
      if (err) {
        return logger.error(err.message);
      }
      // Connect to ngrok in dev mode
      if (ngrok) {
        let url;
        try {
          url = await ngrok.connect(port);
        } catch (e) {
          return logger.error(e);
        }
        logger.appStarted(port, prettyHost, url);
      } else {
        logger.appStarted(port, prettyHost);
      }
    });
  }
}

const app = new App();
app.connectDB();
app.applyMiddleware();
app.run();
