import classnames from 'classnames';
import React, { useState } from 'react';
import { Navigation } from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../Button/Button';

import style from './List.module.scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss';
// eslint-disable-next-line import/no-unresolved
import 'swiper/scss/navigation';

function List() {
  const [isAdded, setIsAdded] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  const handleOpen = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.scheduleList}>
      <div className={style.day}>
        <div className={style.head}>
          <div className={style.date}>12 октября</div>
          <div className={style.weekDay}>Вторник</div>
        </div>
        <div className={style.item}>
          <div className={style.description}>
            <div className={style.time}>
              14:00 <sup>мск</sup>
            </div>
            <div className={style.info}>
              <div className={style.title}>
                Круглый стол с хэдофисами НТО: новые турпродукты и триггеры для
                продвижения на туристов из России и СНГ
              </div>
              <div className={style.text}>
                Официальное открытие «OTM: Зима 20/21»: онлайн-сессия с участием
                представителей туристических офисов Греции, Польши, Венгрии,
                Беларуси и Риги.
              </div>
              <div className={style.program}>
                <button
                  className={classnames(style.accordion, {
                    [style.open]: isOpened,
                  })}
                  type="button"
                  onClick={handleOpen}
                >
                  Программа
                </button>
                <div
                  className={classnames(style.description, { hide: !isOpened })}
                >
                  <ol>
                    <li>Новогодняя столица России 2021 — итоги проекта.</li>
                    <li>Календарь событий 2021.</li>
                    <li>
                      Космос как событие — запуск второй очереди музея Истории
                      космонавтики
                    </li>
                    <li>Город науики и технологий — 65 лет Обнинску.</li>
                    <li>
                      День города как региональный праздник — 650 лет Калеге.
                    </li>
                    <li>
                      Эктотуризм как тренд развития — маршруты, новые проекты,
                      инвесторы.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={style.add}>
              <Button isActive={isAdded} type="default" onClick={handleClick}>
                {isAdded ? 'Добавлено' : 'Добавить'}
              </Button>
              <div className={style.text}>615 участников уже записались</div>
            </div>
          </div>
          <div className={style.text}>
            <span>Национальная организация туризма Кореи</span>
          </div>
          <Swiper
            loop
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 5,
              },
            }}
            className={style.speakers}
            modules={[Navigation]}
            slidesPerView={5}
            spaceBetween={32}
          >
            <SwiperSlide className={style.speaker}>
              <img
                alt="Алексей Венгин"
                className={style.image}
                src="/images/speakers/AlekseiVengin.jpg"
              />
              <div className={style.info}>
                <div className={style.title}>Алексей Венгин</div>
                <div className={style.description}>Profi.Travel</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.speaker}>
              <img
                alt="Магдалена Круч"
                className={style.image}
                src="/images/speakers/MagdalenaKruch.jpg"
              />
              <div className={style.info}>
                <div className={style.title}>Магдалена Круч</div>
                <div className={style.description}>
                  Польская туристическая организации в Москве
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.speaker}>
              <img
                alt="Сергей Молдован"
                className={style.image}
                src="/images/speakers/SergeyMoldovan.jpg"
              />
              <div className={style.info}>
                <div className={style.title}>Сергей Молдован</div>
                <div className={style.description}>LIVE RĪGA</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.speaker}>
              <img
                alt="Ян Кац"
                className={style.image}
                src="/images/speakers/IanKatc.jpg"
              />
              <div className={style.info}>
                <div className={style.title}>Ян Кац</div>
                <div className={style.description}>
                  Венгерская национальная управления по туризму
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.speaker}>
              <img
                alt="Георгий Мавроматис"
                className={style.image}
                src="/images/speakers/GeorgiiMavromatis.jpg"
              />
              <div className={style.info}>
                <div className={style.title}>Георгий Мавроматис</div>
                <div className={style.description}>
                  Греческая Национальной Туристической Организации
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default List;
