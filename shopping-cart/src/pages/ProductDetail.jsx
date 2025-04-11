import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="text-center mt-10 text-2xl">
      Product Details for product #{id}
    </div>
  );
}

export default ProductDetail;
