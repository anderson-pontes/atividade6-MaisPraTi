import styled from 'styled-components';
import Card from '../../components/Card.jsx';

const Container = styled.div`
  max-width: 1400px;
  margin-left: 230px;
  margin-right: auto;
  padding: 2rem 0;
  background: ${({ theme }) => theme.background};
  @media (max-width: 480px) {
    margin-left: 0;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function StyledComponentsPage({ products}) {  
  return (
    <Container>
      <Title>Styled Components Styles</Title>
      <ProductGrid>
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
      </ProductGrid>
    </Container>
  );
}

export default StyledComponentsPage;
