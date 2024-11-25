import express from 'express'
import { Login, logout, Register } from '../controllers/user.js';
const router = express.Router();
router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
export default router;