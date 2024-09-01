import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/posts", {
        titulo,
        descripcion,
      });
      setMensaje("Post creado exitosamente!");
      setTitulo("");
      setDescripcion("");
    } catch (error) {
      console.error("Error al crear el post:", error);
      setMensaje("Error al crear el post.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Crear un nuevo Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Título:
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Descripción:
          </label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          type="submit"
        >
          Crear Post
        </button>
      </form>
      {mensaje && (
        <p className="mt-4 text-center text-green-500 font-semibold">
          {mensaje}
        </p>
      )}
    </div>

    // <div>
    //   <h2>Crear un nuevo Post</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Título:</label>
    //       <input
    //         type="text"
    //         value={titulo}
    //         onChange={(e) => setTitulo(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Descripción:</label>
    //       <textarea
    //         value={descripcion}
    //         onChange={(e) => setDescripcion(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button
    //       className="bg-slate-300 hover:bg-slate-400 p-2 m-5 rounded-lg"
    //       type="submit"
    //     >
    //       Crear Post
    //     </button>
    //   </form>
    //   {mensaje && <p>{mensaje}</p>}
    // </div>
  );
};

export default PostForm;
