import classnames from 'classnames';
import React from 'react';

import Button from '../Button';

import style from './Table.module.scss';
import Event from './components/Event';

function Table() {
  return (
    <>
      <div className={style.order}>
        <div className={style.title}>Порядок:</div>
        <ul className={style.weeks}>
          <li className={classnames(style.week, style.activeWeek)}>
            1-я неделя
          </li>
          <li className={style.week}>2-я неделя</li>
          <li className={style.week}>3-я неделя</li>
        </ul>
      </div>
      <div className={style.scheduleTable}>
        <div className={style.day}>
          <div className={style.head}>23 сентября, ПН</div>
          <div className={classnames(style.item, style.notFilled)}>
            <div className={style.time}>
              9:00 <sup>мск</sup>
            </div>
          </div>
          <div className={style.item}>
            <Event>
              <div className={style.time}>
                10:00 <sup>мск</sup>
              </div>
              <div className={style.place}>Офис по туризму Дубая</div>
              <div className={style.description}>
                Департамент туризма Дубая расскажет, как эмират обеспечивает
                безопасность жителей и гостей.
              </div>
            </Event>
          </div>
        </div>
        <div className={style.day}>
          <div className={style.head}>13 октября, ВТ</div>
          <div className={style.item}>
            <Event>
              <div className={style.time}>
                9:00 <sup>мск</sup>
              </div>
              <div className={style.place}>Офис по туризму Дубая</div>
              <div className={style.description}>
                FIT: все турагенты делают это. Как быстро и безопасно
                удовлетворять сложные запросы туристов?Как быстро и безопасно
                удовлетворять сложные запросы туристов?
              </div>
            </Event>
          </div>
          <div className={style.item}>
            <Event>
              <div className={style.time}>
                9:00 <sup>мск</sup>
                <div className={style.live}>live</div>
              </div>
              <div className={style.place}>Офис по туризму Дубая</div>
              <div className={style.description}>
                Департамент туризма Дубая расскажет, как эмират обеспечивает
                безопасность жителей и гостей.
              </div>
            </Event>
          </div>
        </div>
        <div className={style.day}>
          <div className={style.head}>14 октября, СР</div>
          <div className={classnames(style.item, style.notFilled)}>
            <div className={style.time}>
              9:00 <sup>мск</sup>
            </div>
          </div>
          <div className={style.item}>
            <Event>
              <div className={style.time}>
                10:00 <sup>мск</sup>
              </div>
              <div className={style.place}>Офис по туризму Дубая</div>
              <div className={style.description}>
                Barceló в ОАЭ — все новости за час: готовимся к зимнему сезону,
                открытие нового отеля.
              </div>
            </Event>
          </div>
        </div>
        <div className={classnames(style.day, style.specialDay)}>
          <div className={style.head}>15 октября, ЧТ</div>
          <div className={style.item}>
            <div className={style.time}>День нетворкинга</div>
            <div className={style.description}>
              В этот день открыта возможность проведения встреч в системе
              нетворкинга. Выберите партнеров в турбизнесе и начните общение с
              ними!
            </div>
            <Button type="special">Перейти в систему</Button>
          </div>
        </div>
        <div className={style.day}>
          <div className={style.head}>14 октября, СР</div>
          <div className={style.item}>
            <Event>
              <div className={style.time}>
                9:00 <sup>мск</sup>
              </div>
              <div className={style.place}>Офис по туризму Дубая</div>
              <div className={style.description}>
                Barceló в ОАЭ — все новости за час: готовимся к зимнему сезону,
                открытие нового отеля.
              </div>
            </Event>
          </div>
          <div className={classnames(style.item, style.notFilled)}>
            <div className={style.time}>
              10:00 <sup>мск</sup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
