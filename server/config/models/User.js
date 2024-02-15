const mongoose = require('mongoose');
import {v4 as uuidv4} from 'uuid';

const UserSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.UUID,
            required: true,
            default: uuidv4()
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
        token: {
            type: String
        }
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;