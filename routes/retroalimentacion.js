const express = require('express');
const router = express.Router();
const authController = require("../controllers/retroalimentacion");

router.get('/view', authController.viewRetroalimentacion);
router.get('/voto/:idUsuario/:idRetroalimentacion', authController.votar);
router.get('/obtener/:retroId', authController.obtenerRetroalimentacion); //obtener información de una retroalimentación específica.
router.post('/crear', authController.crearRetroalimentacion);
router.put('/actualizar/:retroId', authController.actualizarRetroalimentacion); //actualizar información de una retroalimentación específica.
router.get('/delete/:retroId', authController.borrarRetroalimentacion); //eliminar una retroalimentación específica.

module.exports = router; 