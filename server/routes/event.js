import express from 'express'

import { createEvent, getEvents } from '../controllers/events.js';

const router = express.Router();

/**
 * GET
 * Get All Events 
 * localhost:port/events
 */
router.get('/', getEvents)


/**
 * POST 
 * Create Event 
 * localhost:port/events/create
 */
router.post('/create', createEvent)

/**
 * TODO:
 *  - Edit Event 
 *  - Delete Event 
 * 
 */

export default router;