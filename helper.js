'use strict';

exports.params = function(options) {
  if (this.params) {
    var list = this.params.map(function (param) {
      var nameSplit = param.name.split('.')
      var name = nameSplit[nameSplit.length - 1]
      if (nameSplit.length > 1) name = '.' + name
      if (param.variable) name = '...' + name
      return {
        indent: new Array(nameSplit.length).join('    '),
        name: name,
        optional: param.optional,
        type: param.type,
        defaultvalue: param.defaultvalue,
        description: param.description
      }
    })
    return options.fn(list)
  }
}

exports.openBrace = '{'

exports.closeBrase = '}'
