const mongoose = require('mongoose');
const uuid = require('uuid');

const TableSchema = new mongoose.Schema(
    {
        tableID: {
            type: mongoose.Schema.Types.UUID,
            required: true,
            default: uuid.v4(),
            unique: true
        },
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