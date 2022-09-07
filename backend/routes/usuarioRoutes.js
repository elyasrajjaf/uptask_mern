import express from "express"
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from "../controllers/usuarioController.js"
import checkAuth from "../middleware/checkAuth.js"

const router = express.Router()

// Creacion registro y confimarcion usuarios
router.post('/', registrar) // Crea un nuevo usuario
router.post('/login', autenticar) // Iniciar Sesion
router.get('/confirmar/:token', confirmar) // Confirmar usuario
router.post('/olvide-password', olvidePassword) // Enviar Token al usuario
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

router.get('/perfil', checkAuth, perfil)

export default router