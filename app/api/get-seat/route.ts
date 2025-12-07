import { kv } from '@vercel/kv';

export async function GET() {
  const maxSeats = 22;

  const usedSeats = (await kv.get("used_seats")) || [];
  const remaining = Array.from({ length: maxSeats }, (_, i) => i + 1)
                        .filter(n => !usedSeats.includes(n));

  if (remaining.length === 0) {
    return new Response(JSON.stringify({ error: "席番号がもうありません。" }), { status: 200, headers: { 'Content-Type': 'application/json' }});
  }

  const randomIndex = Math.floor(Math.random() * remaining.length);
  const seat = remaining[randomIndex];

  await kv.set("used_seats", [...usedSeats, seat]);

  return new Response(JSON.stringify({ seat }), { status: 200, headers: { 'Content-Type': 'application/json' }});
}
