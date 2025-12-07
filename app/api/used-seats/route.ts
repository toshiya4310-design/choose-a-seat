import { kv } from '@vercel/kv';

export async function GET() {
  const seats = (await kv.get("used_seats")) as number[] | null || [];
  return new Response(JSON.stringify({ seats }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
