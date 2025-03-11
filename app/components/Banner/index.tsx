import styles from './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './swiper.css';

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide><img src="/images/banner1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/banner2.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
};