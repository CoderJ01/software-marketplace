const mongoose = require('mongoose');
const uuid = require('uuid');

const FormSchema = new mongoose.Schema(
    {   
        formID: {
            type: mongoose.Schema.Types.UUID,
            required: true,
            default: uuid.v4(),
            unique: true
        },
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