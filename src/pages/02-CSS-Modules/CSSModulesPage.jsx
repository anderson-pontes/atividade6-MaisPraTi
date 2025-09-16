import styles from './CSSModulesPage.module.css';
import Card from '../../components/Card.jsx';
    
function CSSModulesPage({ products }) {
    return (
        <div className={styles.cssModules}>
            <h1 className={styles.title}>CSS Modules Styles</h1>
            <div className={styles.productGrid}>
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

export default CSSModulesPage;