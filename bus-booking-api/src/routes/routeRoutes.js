const express = require('express');
const { addRoute, updateRoute, getRoutes } = require('../controllers/routeController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

// Admin Routes
router.post('/', authMiddleware, adminMiddleware, addRoute); 
router.put('/:id', authMiddleware, adminMiddleware, updateRoute);  

// User Route
router.get('/', getRoutes);  

module.exports = router;
