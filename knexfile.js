module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gRecipes_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
