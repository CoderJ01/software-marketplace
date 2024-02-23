const mongoose = require('mongoose');

const TableSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        price: {
            type: Number,
            default: 5 // dollars
        }
    }
);

const Table = mongoose.model('Table', TableSchema);
module.exports = Table;