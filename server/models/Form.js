const mongoose = require('mongoose');

const FormSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        fields: {
            type: Array,
            required: true
        },
        amount: {
            type: Number, 
            required: true
        },
        pricePerForm: {
            type: Number,
            default: 50 // dollars
        }
    }
);

const Form = mongoose.model('Form', FormSchema);
module.exports = Form;