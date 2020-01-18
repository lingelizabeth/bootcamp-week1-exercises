/* eslint-disable linebreak-style */
const { Model, snakeCaseMappers } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  // static get columnNameMappers() {
  //   return snakeCaseMappers()
  // }
  async $beforeUpdate(opt, queryContext) {
    await super.$beforeUpdate(opt, queryContext)
    this.updated_at = knex.fn.now() // query(queryContext.transaction).patch({ updated_at: knex.fn.now() })
  }
}

module.exports = BaseModel
