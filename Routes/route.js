import express from "express";

import { userSignup, userLogIn } from "../Controller/user-controller.js";
import { getProducts, getProductById } from '../Controller/product-controller.js';
import { addPaymentGateway } from '../controller/payment-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignup);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway)

export default router;