import { Link } from "react-router-dom";

export default function ProductList() {
  const products = [
    { id: 1, name: "Smartphone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Headphones" },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
