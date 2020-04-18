const mysql = require('mysql');
const session = require('express-session');
const MysqlStore = require('express-mysql-session')(session);
const { PrismaClient } = require('@prisma/client');

module.exports.connection = mysql.createConnection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASS_DATABASE,
  database: process.env.NAME_DATABASE,
});

module.exports.session = session({
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
    this.connection,
  ),
  cookie: {
    sameSite: true,
    secure: process.env.NODE_ENV === 'production',
    // eslint-disable-next-line radix
    maxAge: parseInt(process.env.SESS_TIMELIFE),
  },
});

module.exports.prisma = new PrismaClient();
