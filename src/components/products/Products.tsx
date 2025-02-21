import { useEffect, useState } from "react";
import styles from "./products.module.css";
import ProductCard from "../productCard/ProductCard";

// описал один экземпляр данных в массиве из АРІ
interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} title = {product.title}  image = {product.image} price = {product.price} id = {product.id} />
      ))}
    </div>
  );
}
