import { Swiper, SwiperSlide } from 'swiper/react';
import bloggerImage from '../img/user-image.png';

import 'swiper/css';

export const Reviews = () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView='auto'
      breakpoints={{
        479: {
          spaceBetween: 20,
        },
        767: {
          spaceBetween: 30,
        },
        991: {
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide style={{ width: 'auto' }}>
        <article className='app__main-bloggers-card'>
          <img
            className='app__main-bloggers-card-image'
            src={bloggerImage}
            alt='Blogger'
          />

          <p className='app__main-bloggers-card-name'>maria_bank</p>

          <p className='app__main-bloggers-card-account'>Revolut Premium</p>

          <div className='app__main-bloggers-card-button'>$ 2828</div>

          <div className='app__main-bloggers-card-arrow' />
        </article>
      </SwiperSlide>

      <SwiperSlide style={{ width: 'auto' }}>
        <article className='app__main-bloggers-card'>
          <img
            className='app__main-bloggers-card-image'
            src={bloggerImage}
            alt='Blogger'
          />

          <p className='app__main-bloggers-card-name'>olyaa_</p>

          <p className='app__main-bloggers-card-account'>Feed</p>

          <div className='app__main-bloggers-card-button'>$ 800</div>

          <div className='app__main-bloggers-card-arrow' />
        </article>
      </SwiperSlide>

      <SwiperSlide style={{ width: 'auto' }}>
        <article className='app__main-bloggers-card'>
          <img
            className='app__main-bloggers-card-image'
            src={bloggerImage}
            alt='Blogger'
          />

          <p className='app__main-bloggers-card-name'>lena_bloger</p>

          <p className='app__main-bloggers-card-account'>Hoff</p>

          <div className='app__main-bloggers-card-button'>$ 750</div>

          <div className='app__main-bloggers-card-arrow' />
        </article>
      </SwiperSlide>

      <SwiperSlide style={{ width: 'auto' }}>
        <article className='app__main-bloggers-card'>
          <img
            className='app__main-bloggers-card-image'
            src={bloggerImage}
            alt='Blogger'
          />

          <p className='app__main-bloggers-card-name'>iryna_bazar</p>

          <p className='app__main-bloggers-card-account'>Premium clothes</p>

          <div className='app__main-bloggers-card-button'>$ 300</div>

          <div className='app__main-bloggers-card-arrow' />
        </article>
      </SwiperSlide>
    </Swiper>
  );
};
