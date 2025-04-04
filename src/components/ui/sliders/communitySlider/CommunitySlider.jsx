import styles from './CommunitySlider.module.css';
import PropTypes from 'prop-types';
import { splitArray } from '../../../../lib/utils/splitArray';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CommunitySlider({ list = [] }) {
  const groupedList = splitArray(list, 2);

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        className={styles.slider}
        loop={true}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: `.${styles.pagination}`,
        }}
        style={{ width: '100%', maxWidth: '100%' }}
      >
        {groupedList.map((item, index) => (
          <SwiperSlide
            key={`slider-item-${index}`}
            className={styles.slide}
            style={{ minWidth: '100%' }}
          >
            <ul>
              {item.map((comment, idx) => (
                <li key={`slider-comment-${idx}`} className={styles.comment}>
                  <p>“{comment.description}”</p>
                  <span>-{comment.name}</span>
                </li>
              ))}
            </ul>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.pagination}></div>
    </div>
  );
}

CommunitySlider.propTypes = {
  list: PropTypes.array,
};
