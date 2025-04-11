import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <Link
        to={`/shop/${product.id}`}
        className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
