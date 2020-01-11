const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MentorSchema = new Schema({
    name: {type: String, required: true, max: 100},
    phone: {type: Number, required: true},
    task:{type:String}
});


// Export the model
module.exports = mongoose.model('Mentor', MentorSchema);