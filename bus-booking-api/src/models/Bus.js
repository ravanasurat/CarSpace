const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    name: String,
    route: String,
    seats: Number,
    availableSeats: Number
});

module.exports = mongoose.model('Bus', BusSchema);
