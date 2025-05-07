import { Router } from 'express';
import { UserDAO } from '../dao/User.dao.js';
import { UserDTO } from '../dto/User.dto.js';

const router = Router();
const userDao = new UserDAO();

// Simulación de login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Simulamos validación de usuario (sin hashear, solo ejemplo)
    const user = await userDao.getByEmail(email);
    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Guardamos el user simulado en sesion (en este caso, req)
    req.user = user;
    res.json({ message: 'Login exitoso', user });
});

// Simulación de `/current`
router.get('/current', async (req, res) => {
    // ⚠️ En este ejemplo, simulamos que ya tenemos el id del usuario
    const user = await userDao.getById('681a6cbea868bc04c14636f2');

    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const safeUser = new UserDTO(user);
    res.json(safeUser);
});

export default router;
