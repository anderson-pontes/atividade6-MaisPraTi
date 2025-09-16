import './Navbar.css';
import { useTheme } from '../context/ThemeProvider';
import { useState, useEffect } from 'react';

function Navbar({ onSelect, activeVersion }) {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <nav className="navbar">
                <div className="navbar-top-row">
                    <button
                        className={`hamburger${menuOpen ? ' open' : ''}`}
                        aria-label="Abrir menu"
                        onClick={() => setMenuOpen(m => !m)}>
                        <span className="hamburger-line top" />
                        <span className="hamburger-line middle" />
                        <span className="hamburger-line bottom" />
                    </button>
                    <div className="logo logo-center">LogoLoja</div>
                    <button className="badge" aria-label="Carrinho">
                        🛒
                    </button>

                    <div className="navbar-actions">
                        <div className="theme-toggle">
                            <button onClick={toggleTheme}>
                                {theme.name === 'light' ? '☾' : '☼'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="logo-theme-row">
                    <div className="logo">LogoLoja</div>
                    <button className="badge desktop-badge" aria-label="Carrinho">
                        🛒
                    </button>
                    <div className="theme-toggle-wrapper">
                        <div className="theme-toggle">
                            <button className="darkModeToggle" onClick={toggleTheme}>
                                {theme.name === 'light' ? '☾' : '☼'}
                            </button>
                        </div>
                    </div>
                </div>
                <hr />

                {/* Desktop nav links */}
                {!isMobile && (
                    <ul className="nav-list">
                        <li><button
                            className={activeVersion === 'global' ? 'active' : ''}
                            onClick={() => onSelect('global')}>Global CSS</button></li>
                        <li><button
                            className={activeVersion === 'modules' ? 'active' : ''}
                            onClick={() => onSelect('modules')}>CSS Modules</button></li>
                        <li><button
                            className={activeVersion === 'tailwind' ? 'active' : ''}
                            onClick={() => onSelect('tailwind')}>Tailwind</button></li>
                        <li><button
                            className={activeVersion === 'styled' ? 'active' : ''}
                            onClick={() => onSelect('styled')}>Styled Components</button></li>
                    </ul>
                )}

                {/* Mobile nav links */}
                {isMobile && menuOpen && (
                    <ul className="nav-list nav-list-open">
                        <li><button
                            className={activeVersion === 'global' ? 'active' : ''}
                            onClick={() => { onSelect('global'); setMenuOpen(false); }}>Global CSS</button></li>
                        <li><button
                            className={activeVersion === 'modules' ? 'active' : ''}
                            onClick={() => { onSelect('modules'); setMenuOpen(false); }}>CSS Modules</button></li>
                        <li><button
                            className={activeVersion === 'tailwind' ? 'active' : ''}
                            onClick={() => { onSelect('tailwind'); setMenuOpen(false); }}>Tailwind</button></li>
                        <li><button
                            className={activeVersion === 'styled' ? 'active' : ''}
                            onClick={() => { onSelect('styled'); setMenuOpen(false); }}>Styled Components</button></li>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Navbar;