import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react'; // <--- Adicione isso
import Header from './components/Header.jsx';

// Lazy Loading: As páginas só carregam quando o usuário clica!
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const User = lazy(() => import('./pages/User.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className="content-container" style={{ minHeight: '80vh', padding: '20px' }}>
          <Suspense fallback={<h2>Carregando... ⌛</h2>}>
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              <Route path="/user/:id" element={<User />} /> {/* Rota com parâmetro! */}
            </Routes>
          </Suspense>
        </div>
        
        <footer style={{ textAlign: 'center', padding: '10px', background: '#eee' }}>
          <p>© 2026 - Projeto do Felipe Nascimento</p>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;