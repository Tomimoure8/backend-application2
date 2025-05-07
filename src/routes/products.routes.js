import { Router } from 'express';
import { authRole } from '../middlewares/auth.middleware.js';

const router = Router();

// Crear producto – solo admin
router.post('/', authRole('admin'), (req, res) => {
    res.send('✅ Producto creado (solo admins pueden ver esto)');
});

// Ver productos – cualquiera
router.get('/', (req, res) => {
    res.send('📦 Lista de productos (todos pueden ver)');
});

export default router;
