import React from 'react';
import cls from './LangInterpreters.module.scss';

export default function LangInterpreters() {
  return (
    <div>
      <h4 style={{ marginTop: 40 }}>Город Бишкек</h4>

      <ul className={cls.List}>
        <li className={cls.Interpreter}>
          <p>
            <span style={{ fontWeight: 600 }}>ФИО:</span> Трифонова Маргарита
            Александровна
            <br />
            <span style={{ fontWeight: 600 }}>Контактные данные:</span> 0552
            478423, 0772 273677
          </p>
        </li>

        <li className={cls.Interpreter}>
          <p>
            <span style={{ fontWeight: 600 }}>ФИО:</span> Стаценко Анна
            Владимировна
            <br />
            <span style={{ fontWeight: 600 }}>Контактные данные:</span> 0550
            271045, 0773 271045
          </p>
        </li>
      </ul>
    </div>
  );
}
