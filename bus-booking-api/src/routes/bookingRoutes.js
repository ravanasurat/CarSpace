const express = require('express');
const { bookBus, cancelBooking, getBookings } = require('../controllers/bookingController'); // ✅ Correct import path
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new booking (User must be authenticated)
router.post('/', authMiddleware, bookBus);

// Cancel a booking
router.delete('/:bookingId', authMiddleware, cancelBooking);

// Get all bookings for a user
router.get('/', authMiddleware, getBookings);

module.exports = router;
