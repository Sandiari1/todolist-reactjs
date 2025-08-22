import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      
      <header className="header">
        <h1>🚀 Belajar React</h1>

      </header>
     <section className="hero">
        <div className="hero-text">
          <h2>Belajar React + Vite </h2>

        </div>
      </section>

      
      <div className="card">
        <h2>Counter</h2>
        <p>Kamu sudah klik {count} kali</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Klik Saya
        </button>
      </div>

     
      <footer className="footer">
        © {new Date().getFullYear()} 
      </footer>
    </div>
  );
}

export default App;
