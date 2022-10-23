import express, { Router } from 'express';
import { requireLogin } from '../controllers/auth';
import { createMessage, getMessages } from '../controllers/messages';

const router: Router = express.Router()

router.get('/', requireLogin, getMessages)
router.post('/', requireLogin, createMessage)


export default router