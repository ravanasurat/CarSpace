const Booking = require('../models/Booking'); 
const Bus = require('../models/Bus'); 

exports.bookBus = async (req, res) => {
    try {
        const { busId, seats } = req.body;
        const userId = req.user.id;

        const bus = await Bus.findById(busId);
        if (!bus) return res.status(404).json({ error: "Bus not found" });

        if (bus.availableSeats < seats) {
            return res.status(400).json({ error: "Not enough available seats" });
        }

        const booking = await Booking.create({ userId, busId, seats });

        bus.availableSeats -= seats;
        await bus.save();

        res.status(201).json({ message: "Booking confirmed", booking });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.bookingId);
        if (!booking) return res.status(404).json({ error: "Booking not found" });

        const bus = await Bus.findById(booking.busId);
        bus.availableSeats += booking.seats;
        await bus.save();

        await Booking.findByIdAndDelete(req.params.bookingId);
        res.json({ message: "Booking cancelled successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id }).populate('busId');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
