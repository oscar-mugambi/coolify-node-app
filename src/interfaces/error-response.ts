import type { TMessageResponse } from './message-response.js';

type ErrorResponse = {
  stack?: string;
} & TMessageResponse;
export default ErrorResponse;
