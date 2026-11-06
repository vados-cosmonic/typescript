// Respond to every request with a fixed greeting
export function handleRequest(): Response {
  return new Response('Hello from TypeScript!\n');
}
