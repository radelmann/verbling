module.exports = {
  'port': process.env.VERBLING_PROD_PORT || 3000,
   'db_url': process.env.VERBLING_PROD_DB_URL || 'mongodb://localhost:verbling/verbling'
}