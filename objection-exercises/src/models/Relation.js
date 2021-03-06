/* eslint-disable linebreak-style */
// Write your relation model here!
const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const User = require('./User')


class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    return {
      parent: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relations.parentId',
          to: 'users.id',
        },
      },
      child: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'relations.childId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Relation
