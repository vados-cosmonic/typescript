import { expect, test } from 'vitest';
import { handleRequest } from '../src/handler.js';

test('responds with a greeting', async () => {
  const res = handleRequest();
  expect(res.status).toBe(200);
  expect(await res.text()).toBe('Hello from TypeScript!\n');
});
