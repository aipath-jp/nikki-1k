import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const data = await request.json();
  const { content } = data;
  const db = (locals as any).runtime.env.DB;

  try {
    await db.prepare('INSERT INTO posts (content) VALUES (?)').bind(content).run();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};
