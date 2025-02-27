const express = require('express');
const { addBus, updateBus, getBuses } = require('../controllers/busController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware'); 

const router = express.Router();

// Admin Routes
router.post('/', authMiddleware, adminMiddleware, addBus); 
router.put('/:id', authMiddleware, adminMiddleware, updateBus);  

// User Route
router.get('/', getBuses); 

module.exports = router;
