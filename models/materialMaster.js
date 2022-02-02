const mongoose = require('mongoose');
const materialSchema = mongoose.Schema({
    modelName: String,
    gradeName: String,
    diameter: double,
});

module.exports = mongoose.model('material', materialSchema);