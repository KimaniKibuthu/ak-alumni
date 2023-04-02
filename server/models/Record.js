const mongoose = require('mongoose');

const RecordSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    position: {
        type: Number,
        required: true,
    },
    level: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Record', RecordSchema);