import styles from "./ProductCard.module.css";

interface IProductCardProps {
    title: string;
    image: string;
    id: number;
    price: number;
}

export default function ProductCard({title, image, id, price}: IProductCardProps): JSX.Element {
    return (
        <div className={styles.productCard}>
          <h4>{title.length <30 ? title : title.slice(0,30) + '...'} </h4>
          <p>Price {price} $</p>
          <div><img src={image} alt="" /></div>
        </div>
    );
}