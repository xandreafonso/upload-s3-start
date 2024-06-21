"use client";

import { api } from "@/lib/api";
import { ChangeEvent, useState } from "react";

export default function Home() {

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
        alert('Por favor, selecione um arquivo primeiro.');
        return;
    }

    api.post('/signed-url', { Key: file.name }).then((response) => {
      const url = response.data.url;

      api.put(url, file, {
        headers: {
          'Content-Type': file.type
        },
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent.progress ?? 0);
        },
      }).then(() => {
        alert('Arquivo enviado com sucesso!');
      })
    });
};

  return (
    <main className="h-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 w-[400px] h-[400px]">
        <input type="file" className="file-input w-full max-w-xs"
          onChange={handleFileChange}
        />
        <button className="btn" onClick={handleUpload}>Upload</button>
      </div>
    </main>
  );
}
