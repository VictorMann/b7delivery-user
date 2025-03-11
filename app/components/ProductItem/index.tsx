import { Product } from '@/app/types/Product';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {
  data: Product;
  mainColor: string;
  secondColor: string;
}

export const ProductItem = ({ data, mainColor, secondColor }: Props) => {
  return (
    <Link className={styles.container} href={`/b7burger/product/${data.id}`}>
      <div className={styles.head} style={{ backgroundColor: secondColor }}></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={data.image} alt="" />
        </div>
        <div className={styles.catName}>{data.categoryName}</div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.price} style={{ color: mainColor }}>{data.price}</div>
      </div>
    </Link>
  )
};