import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido al Rincón de Marcos!");
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});

// Operaciones CRUD

const posts = [];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.post("/api/posts", (req, res) => {
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

// Puedes agregar rutas para actualizar y eliminar posts
