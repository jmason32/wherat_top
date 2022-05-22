import express from 'express';
import { getUsers } from '../controllers/user.js';

const router = express.Router();

/**
 * GET 
 * Get All Users - Admin
 * localhost:port/user
 */

router.get("/", getUsers)

/**
 * TODO:
 *  - Create User 
 *  - Edit User 
 *  - Delete User 
 */

export default router;