// import React, { useEffect, useState } from "react";
import Posts from "./Posts";

function App() {
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("/posts")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPosts(data); // Guardar los posts en el estado
  //       });
  //   }, []);

  //   return (
  //     <div className="App">
  //       <h1>Bienvenido al Rincon de Marcos!</h1>
  //       <ul>
  //         {posts.map((post, index) => (
  //           <li key={index}>{post.title}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  <div>
    <h1>Crear Post</h1>
    <Posts />
  </div>;
}

export default App;
