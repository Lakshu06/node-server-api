const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NameSchema = new Schema({
    username: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

const user = mongoose.model('User', NameSchema);

module.exports = user;