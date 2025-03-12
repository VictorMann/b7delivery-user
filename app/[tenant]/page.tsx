'use client'

import { Banner } from "@/app/components/Banner";
import styles from "./page.module.css";
import { SearchInput } from '@/app/components/SearchInput';
import { ProductItem } from "@/app/components/ProductItem";
import { usePathname } from "next/navigation";
import { useAppContext } from "../contexts/AppContext";
import { useEffect } from "react";
import { useApi } from "../libs/useApi";
import { Tenant } from "../types/Tenant";

export default function Page() {
  const pathname = usePathname();
  const { tenant, setTenant } = useAppContext();
  
  useEffect(() => {
    let path = pathname.split('/')[1].split('?')[0];
    const fn = async () => {
      const api = useApi();
      const oTenant = await api.getTenant(path);
      setTenant(oTenant as Tenant);
    };
    fn();
  }, []);


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
              <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>
              <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>
              <div className={styles.menuButtonLine} style={{backgroundColor: tenant?.mainColor}}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          {tenant &&
          <SearchInput 
            mainColor={tenant?.mainColor}
            onSearch={handleSearch} />
          }
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        {tenant && 
        <>
        <ProductItem 
          data={{
            id: 1,
            image: '/images/buger.png', 
            name: 'Burger Boladão',
            categoryName: 'Tradicional',
            price: 'R$ 25,50'
          }}
          mainColor={tenant.mainColor}
          secondColor={tenant.secondColor} />
        </>}
      </div>

    </div>
  )
}