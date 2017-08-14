'use strict'

const MiniMongo = require('mini-mongo')
let initialised = false
let database = null
let error = null

if (error !== null) {
  return Promise.reject(error)
}

if (initialised === true && database !== null) {
  return Promise.resolve(database)
}

if (initialised === false || database === null) {
  return new Promise((resolve, reject) => {
    MiniMongo.connect({
      autoload: true,
      directory: '../data'
    }, (err, db) => {
      if (err) {
        error = err
        initialised = false
        database = null
        return reject(err)
      }

      database = db
      initialised = true
      error = null
      return resolve(database)
    })
  })
}
