import React, { useState } from "react";

function Posts() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un nuevo post
    const nuevoPost = { titulo, contenido };

    // Enviar el nuevo post al servidor
    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post creado:", data);
        // Limpia los campos del formulario después de enviarlo
        setTitulo("");
        setContenido("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          id="title"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Contenido:</label>
        <textarea
          id="content"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Crear Post</button>
    </form>
  );
}

export default Posts;
