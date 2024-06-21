import {
  S3Client,
  PutObjectCommand
} from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";



const s3Client = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },

    region: process.env.AWS_REGION!,

    endpoint: process.env.AWS_S3_ENDPOINT!,
    forcePathStyle: true,
});

export async function generatePresignedUrl(
  {Bucket, Key, expiresIn = 3600}: { Bucket: string, Key: string, expiresIn?: number }
) {
  const command = new PutObjectCommand({ Bucket, Key });

  return await getSignedUrl(s3Client, command, { expiresIn });
}