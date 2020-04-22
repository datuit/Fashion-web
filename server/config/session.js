/* eslint-disable no-console */
const mysql = require('mysql');
const Session = require('express-session');
const MysqlStore = require('express-mysql-session')(Session);

const connection = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASS_DATABASE,
  database: process.env.NAME_DATABASE,
});

const session = Session({
  name: process.env.SESS_NAME || 'begginer',
  secret: process.env.SESS_SECRET || 'begginer_1',
  saveUninitialized: false,
  resave: false,
  store: new MysqlStore(
    {
      expiration: 10800000,
      createDatabaseTable: true,
      schema: {
        tableName: 'sessions',
        columnNames: {
          session_id: 'session_id',
          expires: 'expires',
          data: 'data',
        },
      },
    },
    connection,
  ),
  cookie: {
    sameSite: true,
    secure: process.env.NODE_ENV === 'production',
    // eslint-disable-next-line radix
    maxAge: parseInt(process.env.SESS_TIMELIFE),
  },
});

module.exports = {
  session,
  connection,
};
