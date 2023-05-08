const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const routes= require('./routes/index.js')

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/routes', index.js)

module.exports = router;