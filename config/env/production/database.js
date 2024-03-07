
const parse = require("pg-connection-string").parse;

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

module.exports = ({ env }) => ({
  connection: {  
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: true,
    acquireConnectionTimeout: 1000000,
    options: {
      pool: {
        min: 1,
        max: 10,
        acquireTimeoutMillis: 900000,
        createTimeoutMillis: 900000,
        destroyTimeoutMillis: 900000,
      },
    },
  },
});

