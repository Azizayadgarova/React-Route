import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h3>Product Detail Page</h3>
      <p>Product ID: {productId}</p>
    </div>
  );
}
