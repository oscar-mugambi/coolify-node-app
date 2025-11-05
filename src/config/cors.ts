import { CorsOptions } from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://vite.cosmicpenguin.xyz',
];

export const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (error: Error | null, allow?: boolean) => void,
  ) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      // origin is allowed
      callback(null, true);
    } else {
      // origin is not allowed
      callback(new Error('Not allowed by CORS'));
    }
  },
};
