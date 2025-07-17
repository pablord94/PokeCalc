import React, { useState } from 'react';

const UploadImage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div
      onPaste={e => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            const file = items[i].getAsFile();
            if (file) {
              setImage(file);
              setPreview(URL.createObjectURL(file));
            }
          }
        }
      }}
      tabIndex={0}
      style={{ outline: "none" }}
    >
      <input type="file" accept="image/*" onChange={handleChange} />
      <p>Pega una imagen desde el portapapeles (Ctrl+V)</p>
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: 300 }} />}
      <div style={{ marginTop: "1rem", fontWeight: "bold", color: preview ? "green" : "red" }}>
        {preview ? "Imagen detectada" : "No hay imagen"}
      </div>
      {image && (
        <button
          style={{ marginTop: "1rem" }}
          onClick={async () => {
            // Ejemplo de envío a HuggingFace API
            const formData = new FormData();
            formData.append("image", image);
            const response = await fetch("https://api-inference.huggingface.co/models/[modelo]", {
              method: "POST",
              headers: {
                Authorization: "Bearer [tu_token]",
              },
              body: formData,
            });
            const result = await response.json();
            alert("Pokémon detectados: " + JSON.stringify(result));
          }}
        >
          Detectar Pokémon
        </button>
      )}
    </div>
  );
};

export default UploadImage;
