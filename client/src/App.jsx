import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => {
        // Manejar los datos de los posts
      });
  }, []);

  return (
    <div className="App">
      <h1>Mensaje de prueba</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
