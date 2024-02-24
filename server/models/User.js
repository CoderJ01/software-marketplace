const mongoose = require('mongoose');
const uuid = require('uuid');

const UserSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.UUID,
            required: true,
            default: uuid.v4(),
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        industry: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        username: {
            type: String
        },
        balance: {
            type: mongoose.Types.Decimal128
        },
        token: {
            type: String
        }
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;