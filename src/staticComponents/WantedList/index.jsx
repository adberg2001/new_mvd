import Image from 'next/image';
import React from 'react';
import cls from './Wanted.module.scss';

export default function WantedList({ wantedList }) {
  return (
    <ul className={cls.List}>
      {wantedList.map(
        ({ id, full_name, image, description, birth_date, created_by }) => (
          <li className={cls.Wanted} key={id}>
            <Image
              src={image}
              width="120"
              height="200"
              alt={`Фото разыскиваемого ${full_name}`}
              objectFit="contain"
            />
            <h5>ФИО: {full_name}</h5>
            <p>
              {' '}
              <span style={{ fontWeight: 600 }}>Дата рождения:</span>{' '}
              {birth_date}
            </p>

            <p>Подробности: {description}</p>
          </li>
        )
      )}
    </ul>
  );
}
