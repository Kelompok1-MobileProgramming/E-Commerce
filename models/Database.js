const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String
});

const data = mongoose.model('data', dataSchema);

module.exports = data;