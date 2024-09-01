import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear el body de las peticiones como JSON
app.use(express.json());

// Conexión a la base de datos de MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err);
  });

// Definir un esquema y modelo para los posts
const postSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema);

// Rutas CRUD

// Crear un nuevo post
app.post("/posts", async (req, res) => {
  const { titulo, descripcion } = req.body;

  try {
    const newPost = new Post({ titulo, descripcion });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Leer todos los posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Leer un post por ID
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post no encontrado" });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar un post por ID
app.put("/posts/:id", async (req, res) => {
  const { titulo, descripcion } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { titulo, descripcion },
      { new: true }
    );
    if (!updatedPost)
      return res.status(404).json({ error: "Post no encontrado" });
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar un post por ID
app.delete("/posts/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost)
      return res.status(404).json({ error: "Post no encontrado" });
    res.status(200).json({ message: "Post eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
