import { useState } from 'react';

export default function FeedbackForm() {
  // 1. Aqui vamos criar os "Estados" (useState)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  // 2. Aqui vamos criar a função de envio
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede a página de recarregar
    alert(`Feedback enviado!\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}
    `);
    setNome("");
    setEmail("");
    setComentario("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Deixe seu Feedback</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nome:</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            placeholder="Digite seu nome"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="seu@email.com"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Comentário:</label>
          <textarea 
            value={comentario} 
            onChange={(e) => setComentario(e.target.value)} 
            placeholder="O que você achou?"
            style={{...styles.input, minHeight: '100px'}}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Enviar Feedback
        </button>
      </form>
    </div>
  );
}

// Objeto de estilos para deixar tudo organizado
const styles = {
  container: {
    backgroundColor: '#b8cfd46f',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '400px',
    margin: '50px auto',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.22)',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px'
  },
  button: {
    backgroundColor: '#444444ff', // Rosa da Digital Store!
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.3s'
  }

};