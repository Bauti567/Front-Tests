import { useState } from "react";

function HomePage(params) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Pagina de ejemplo</p>
    </div>
  );
}

function About(params) {
  return (
    <div>
      <h3>About</h3>
      <span>Clon de React Router</span>
    </div>
  );
}

function App() {
  const [currentPath,setCurrentPath] = useState(window.location.pathname);
  
  return (
    <main>
      <HomePage/>
      <About/>
    </main>
  );
}

export default App;
