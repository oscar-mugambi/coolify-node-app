import app from './app.js';
import { connectDB } from './config/db.js';
import { env } from './env.js';

const startServer = async () => {
  try {
    await connectDB(env.MONGO_URI); // wait for Mongo connection

    const server = app.listen(env.PORT, () => {
      console.log(`🚀 Listening: http://localhost:${env.PORT}`);
    });

    server.on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        console.error(
          `❌ Port ${env.PORT} is already in use. Please choose another port or stop the process using it.`,
        );
      } else {
        console.error('❌ Failed to start server:', err);
      }
      process.exit(1);
    });
  } catch (err) {
    console.error('❌ Could not connect to MongoDB. Server not started.', err);
    process.exit(1);
  }
};

startServer();
