'use strict'

module.exports = {
  privateAPI: Symbol('private-api'),
  clsToDAO: Symbol('cls-to-dao'),
  querySet: Symbol('queryset'),
  fkField: Symbol('fk-field'),
  cleanup: function () {
    this.privateAPI =
    this.clsToDAO =
    this.querySet =
    this.fkField = null
  }
}
