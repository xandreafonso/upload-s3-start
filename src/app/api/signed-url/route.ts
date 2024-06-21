import { generatePresignedUrl } from "@/lib/s3";

export async function POST(req: Request) {
  const { Key } = await req.json();

  const url = await generatePresignedUrl({ Bucket: "test", Key });

  return new Response(JSON.stringify({ url }));
}