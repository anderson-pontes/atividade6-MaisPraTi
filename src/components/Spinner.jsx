import React from 'react'
import { useTheme } from '../context/ThemeProvider.jsx'
import './Spinner.css';

const Spinner = () => {
    const { theme } = useTheme();

    return (
        <div className="spinner-wrapper" role="status">
            <div className="spinner" />
            <div className="spinner-text" style={{ color: theme.text }}>Carregando...</div>
        </div>
    )
}

export default Spinner