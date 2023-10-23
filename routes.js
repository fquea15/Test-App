const express = require('express');
const router = express.Router();
const productoController = require('./controllers/productoController');

router.get('/', productoController.mostrarProductos);
router.post('/agregar', productoController.agregarProducto);

module.exports = router;
