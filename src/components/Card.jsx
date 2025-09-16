import './Card.css';
import { useTheme } from '../context/ThemeProvider';

function Card({ title, price, rating, tag, image, loading, disabled, onAdd, variant = 'solid', className }) {
  const { theme } = useTheme();

  return (
    <div className={`card${loading ? ' card-loading' : ''}${disabled ? ' card-disabled' : ''}${className ? ' ' + className : ''}`} 
    style={{
        background: theme.surface,
        color: theme.text,
        boxShadow: theme.name === 'light'
          ? '0 2px 8px rgba(160, 129, 108, 0.15)'
          : '0 2px 8px rgba(35, 41, 70, 0.40)',
        borderRadius: '8px',
        border: `1px solid ${theme.deep}`,
      }} tabIndex={0}>
      <div className="card-image-wrapper">
        {loading ? (
          <div className="card-skeleton" />
        ) : (
          <img src={image} alt={title} className="card-image" loading="lazy" onError={e => { e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }} />
        )}
        {tag && <span className={`card-tag card-tag-${tag.toLowerCase()}`}>{tag}</span>}
      </div>
      <div className="card-content">
        <h2 className="card-title" title={title}>{title}</h2>
        <div className="card-info">
          <span className="card-price">R$ {price}</span>
          <span className="card-rating">{'★'.repeat(rating)}</span>
        </div>
        <button className={`card-btn card-btn-${variant}`} disabled={disabled || loading} onClick={onAdd}>
          {loading ? 'Carregando...' : 'Adicionar'}
        </button>
      </div>
    </div>
  );
}

export default Card;
