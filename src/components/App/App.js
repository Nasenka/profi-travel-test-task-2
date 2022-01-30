import React, { useState } from 'react';

import List from '../List';
import Table from '../Table/Table';

import style from './App.module.scss';

function App() {
  const [scheduleType, setScheduleType] = useState('list');

  const handleChange = event => {
    setScheduleType(event.target.value);
  };

  return (
    <main>
      <div className={style.container}>
        <div className={style.schedule}>
          <h1>Программа выставки</h1>
          <div className={style.viewSwitcher}>
            Вид расписания:
            <select className={style.select} onChange={handleChange}>
              <option value="list">Список</option>
              <option value="table">Таблица</option>
            </select>
          </div>
          {scheduleType === 'list' ? <List /> : <Table />}
        </div>
      </div>
    </main>
  );
}

export default App;
