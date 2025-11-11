'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .catch(() => setQuote('Erro ao carregar frase.'));
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
        <h2>Olá, eu sou Miguel Augusto</h2>
        <p>Desenvolvedor Web apaixonado por tecnologia e aprendizado.</p>

      <footer>© 2025 - Feito com Next.js </footer>
    </>
  );
}

