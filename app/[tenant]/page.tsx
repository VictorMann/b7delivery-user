'use client'

import { Banner } from "@/app/components/Banner";
import styles from "./page.module.css";
import { SearchInput } from '@/app/components/SearchInput';
import { ProductItem } from "@/app/components/ProductItem";

export default function Page() {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
          <div className={styles.headerTitle}>Seja Bem Vindo (a) 🎉</div>
          <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
          </div>

          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
              <div className={styles.menuButtonLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput 
            mainColor="#FB9400"
            onSearch={handleSearch} />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem 
          data={{
            id: 1,
            image: '/images/buger.png', 
            name: 'Burger Boladão',
            categoryName: 'Tradicional',
            price: 'R$ 25,50'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2" />
        
        <ProductItem 
          data={{
            id: 2,
            image: '/images/buger.png', 
            name: 'Burger Boladão',
            categoryName: 'Tradicional',
            price: 'R$ 25,50'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2" />

        <ProductItem 
          data={{
            id: 3,
            image: '/images/buger.png', 
            name: 'Burger Boladão',
            categoryName: 'Tradicional',
            price: 'R$ 25,50'
          }}
          mainColor="#FB9400"
          secondColor="#FFF9F2" />

      </div>

    </div>
  )
}