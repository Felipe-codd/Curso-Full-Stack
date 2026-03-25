import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h2 style={{ margin: 0 }}>Meu Site React</h2>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>Sobre</Link>
        <Link to="/contact" style={linkStyle}>Contato</Link>
        <Link to="/user/Felipe" style={linkStyle}>Meu Perfil</Link> {/* Novo link para testar parâmetro! */}
      </nav>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  background: '#282c34',
  color: 'white'
};

const linkStyle = {
  color: '#61dafb',
  marginLeft: '15px',
  textDecoration: 'none',
  fontWeight: 'bold'
};