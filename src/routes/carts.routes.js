import { Router } from 'express';
import { authRole } from '../middlewares/auth.middleware.js';
import { createTicket } from '../services/ticket.service.js';
import { CartModel } from '../models/Cart.model.js';
import { ProductModel } from '../models/Product.model.js';

const router = Router();

// Creamos el carrito
router.post('/', authRole('user'), async (req, res) => {
    const newCart = await CartModel.create({ products: [], userEmail: 'tomimoure8@example.com' });
    res.json(newCart);
});

// Agregar producto al carrito
router.post('/:cid/product/:pid', authRole('user'), async (req, res) => {
    const { cid, pid } = req.params;

    const cart = await CartModel.findById(cid);
    if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });

    const product = await ProductModel.findById(pid);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    const index = cart.products.findIndex(p => p.product.equals(pid));

    if (index !== -1) {
        cart.products[index].quantity++;
    } else {
        cart.products.push({ product: pid, quantity: 1 });
    }

    await cart.save();
    res.json(cart);
});

// Mostrar un carrito
router.get('/:cid', async (req, res) => {
    const { cid } = req.params;
    const cart = await CartModel.findById(cid).populate('products.product');
    if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });
    res.json(cart);
});

// Comprar carrito 
router.post('/:cid/purchase', authRole('user'), async (req, res) => {
    try {
        const cart = {
            id: 'cart123',
            products: [
                { id: 'prod1', title: 'Producto 1', price: 100, quantity: 2, stock: 5 },
                { id: 'prod2', title: 'Producto 2', price: 200, quantity: 3, stock: 2 }
            ],
            userEmail: 'tomimoure8@example.com'
        };

        let total = 0;
        const productosNoProcesados = [];

        for (const item of cart.products) {
            if (item.quantity <= item.stock) {
                total += item.price * item.quantity;
                
            } else {
                productosNoProcesados.push(item.id);
            }
        }

        let ticket = null;
        if (total > 0) {
            ticket = await createTicket(total, cart.userEmail);
        }

        const carritoFinal = cart.products.filter(p => productosNoProcesados.includes(p.id));

        res.json({
            ticket,
            productosNoProcesados,
            carritoActualizado: carritoFinal
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al finalizar la compra' });
    }
});

export default router;

