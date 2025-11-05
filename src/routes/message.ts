import { Router } from 'express';
import { Message } from '../models/message';

export const messageRouter = Router();

messageRouter.get('/', async (_req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

messageRouter.post('/', async (req, res) => {
  const msg = new Message({ text: req.body.text });
  await msg.save();
  res.json(msg);
});
