import './GlobalCSS.css';
import Card from '../../components/Card.jsx';

function GlobalCSSPage({ products }) {
    return (
        <div className="global-css">
            <h1>Global CSS Styles</h1>
            <div className="product-grid">
                {products.map(product => (
                    <Card
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        tag={product.tag}
                        image={product.image}
                        onAdd={() => alert(`Adicionado: ${product.title}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default GlobalCSSPage;