import './TailwindCardOverride.css';
import Card from '../../components/Card.jsx';
import { useTheme } from '../../context/ThemeProvider';

function TailwindPage({ products }) {
  const { theme } = useTheme();

  return (
    <div className="max-w-[1400px] mx-auto min-h-screen py-8 px-4 md:px-8 md:ml-[230px] overflow-x-hidden" style={{
        background: theme.background,
        color: theme.text,
      }}>
      <h1 className="text-3xl font-bold text-center mb-8" style={{
          color: theme.text,
        }}>
        Tailwind CSS Styles
      </h1>
      <div className="grid gap-8 p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
        {products.map(product => (
          <div className="flex justify-center items-start" key={product.id}>
            <Card
              title={product.title}
              price={product.price}
              rating={product.rating}
              tag={product.tag}
              image={product.image}
              onAdd={() => alert(`Adicionado: ${product.title}`)}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-72 mx-auto flex flex-col"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TailwindPage;
