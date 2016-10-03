var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;
var UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String},
    email: { type: String, unique: true, required: true },
    mobile: { type: String},
    password: { type: String, required: true }
})
var user = Mongoose.model('User', UserSchema);
module.exports = {
    User: user
};