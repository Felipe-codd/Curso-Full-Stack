import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams(); // Pega o nome que estiver na URL
  return (
    <div>
      <h1>Perfil do Usuário 👤</h1>
      <p>Bem-vindo, <strong>{id}</strong>! Este conteúdo mudou baseado no link.</p>
    </div>
  );
}