'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [clima, setClima] = useState(null);


  useEffect(() => {
    // API de clima
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-8.0476&longitude=-34.87703&current_weather=true&timezone=America/Recife')
      .then((res) => res.json())
      .then((data) => setClima(data.current_weather))
      .catch(() => console.error('Erro ao carregar clima'));
  }, []);




  return (
    <>
      <header>
        <h1>Meu Portfólio</h1>
        <nav>
          <a href="/sobre">Sobre</a>
          <a href="/experiencia-academica">Acadêmica</a>
          <a href="/experiencia-profissional">Profissional</a>
          <a href="/projetos">Projetos</a>
        </nav>
      </header>

      <main style={{ textAlign: 'center' }}>
        <img
          src="/profile.jpg"
          alt="Minha foto de perfil"
          className="foto-perfil"
        />
        <h2>Olá, eu sou <span className="destaque">Miguel Augusto</span></h2>
        <p>Desenvolvedor web apaixonado por tecnologia, criatividade e inovação.</p>

        <div className="redes-sociais">
          <a href="https://github.com/miguelaugustor" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/miguelaugusto" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com/somosbatatinhas" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
        </div>

        <h3>Clima atual em Recife:</h3>
        {clima ? (
          <p> Temperatura: {clima.temperature}°C |  Vento: {clima.windspeed} km/h</p>
        ) : (
          <p>Carregando clima...</p>
        )}

      </main>

      <footer>© 2025 - Feito com Next.js </footer>
    </>
  );
}
