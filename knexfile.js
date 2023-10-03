// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      port : 5432,
      user: 'postgres',
      password: 'theknitnest',
      database: 'the-knit-nest',
    },
    migrations: {
      directory: + './db/migrations',
    },
    seeds: {
      directory: + './seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
