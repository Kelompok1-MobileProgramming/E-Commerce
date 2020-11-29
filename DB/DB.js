const DB = require('../models/Database')

async function find () {
    return await DB.find({})
}

async function create (name) {
    return await DB.create({ name: name})
}

async function remove (id) {
    return await DB.remove({ _id: id})
}

module.exports = {
    find,
    create,
    remove
}