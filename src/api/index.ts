import express from 'express';

import type { TMessageResponse } from '../interfaces/message-response.js';
import { messageRouter } from '../routes/message.js';

const router = express.Router();

router.get<object, TMessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/messages', messageRouter);

export default router;
