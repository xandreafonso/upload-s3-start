# POLÍTICA NO S3 AWS

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Principal": "*",
			"Action": [
				"s3:GetObject",
				"s3:PutObject"
			],
			"Resource": "arn:aws:s3:::s3.aulaemchat.alexandreafonso.com.br/*"
		}
	]
```

# CORS NO S3 AWS

```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "POST"
        ],
        "AllowedOrigins": [
            "*.github.dev",
            "localhost",
            "localhost:3000"
        ],
        "ExposeHeaders": []
    }
]
```
