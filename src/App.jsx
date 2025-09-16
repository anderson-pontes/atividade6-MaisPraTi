import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeProvider';
import Navbar from './components/Navbar.jsx';
import GlobalCSSPage from './pages/01-Global-CSS/GlobalCSSPage.jsx';
import CSSModulesPage from './pages/02-CSS-Modules/CSSModulesPage.jsx';
import TailwindPage from './pages/03-Tailwind/TailwindPage.jsx';
import StyledComponentsPage from './pages/04-Styled-Components/StyledComponentsPage.jsx';
import { fetchProducts } from './components/Products';
import Spinner from './components/Spinner.jsx';

function AppContent() {
  const [version, setVersion] = useState('global');
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleVersion, setVisibleVersion] = useState('global');

  useEffect(() => {
    fetchProducts().then(data => {
      const mapped = data.slice(0, 6).map((product, idx) => ({
        ...product,
        tag: product.tag || (idx % 2 === 0 ? 'Novo' : 'Promo'),
        rating: typeof product.rating === 'object'
          ? Math.round(product.rating.rate)
          : (product.rating || Math.floor(Math.random() * 3) + 3),
      }));
      setProducts(mapped);
    });
  }, []);

  // Show loading spinner when switching versions
  useEffect(() => {
    if (version === visibleVersion) return;
    setLoading(true);
    const timeout = setTimeout(() => {
      setVisibleVersion(version);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [version, visibleVersion]);

  return (
    <div style={{ background: theme.background, color: theme.text, minHeight: '100vh', position: 'relative' }}>
      <Navbar onSelect={setVersion} activeVersion={version} />
      {loading ? (
        <div className="spinner-container">
          <Spinner />
        </div>
      ) : (
        <>
          {visibleVersion === 'global' && <GlobalCSSPage products={products} />}
          {visibleVersion === 'modules' && <CSSModulesPage products={products} />}
          {visibleVersion === 'tailwind' && <TailwindPage products={products} />}
          {visibleVersion === 'styled' && <StyledComponentsPage products={products} />}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;