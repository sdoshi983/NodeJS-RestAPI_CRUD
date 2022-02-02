const mongoose = require('mongoose');
const chemicalSchema = mongoose.Schema({
    gradeName: String,
    silicon: double,
    carbon: double,
});

module.exports = mongoose.model('chemical', chemicalSchema);