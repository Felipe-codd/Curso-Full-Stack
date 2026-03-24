import { useState } from 'react';

export default function FeedbackForm() {
  // 1. Aqui vamos criar os "Estados" (useState)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  // 2. Aqui vamos criar a função de envio
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede a página de recarregar
    alert(`Feedback enviado!\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Formulário de Feedback</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Seu nome"
          />
        </div>

        <br />

        <div>
          <label>Email:</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="seu@email.com"
          />
        </div>

        <br />

        <div>
          <label>Comentário:</label><br />
          <textarea 
            value={comentario} 
            onChange={(e) => setComentario(e.target.value)} 
            placeholder="O que achou do projeto?"
          />
        </div>

        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}