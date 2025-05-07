export const authRole = (roleRequired) => {
    return (req, res, next) => {
        // Se simula un usuario "logueado"
        const user = {
            role: 'user', // Cambialo a 'admin' para probar
            email: 'tomimoure8@example.com'
        };

        req.user = user; // lo guardamos en req para que este accesible en la ruta

        if (user.role !== roleRequired) {
            return res.status(403).json({ error: 'Acceso denegado: permiso insuficiente' });
        }

        next();
    };
};
