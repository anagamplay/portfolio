import './App.css';
import profileImage from './assets/profile.png';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Ana Clara Silvestre</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">Sobre mim</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <div className="text-column">
            <h2 className="title">ANA CLARA SILVESTRE</h2>
            <p className="subtitle">Desenvolvedora Front-end e Mobile</p>
            <div className="buttons">
              <button className="btn hire-me">Contato</button>
              <button className="btn download-cv">Download CV</button>
            </div>
          </div>
          <div className="image-column">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;