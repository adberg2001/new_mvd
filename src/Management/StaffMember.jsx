import React from 'react';
import Image from 'next/image';
import cls from './Management.module.scss';

export default function StaffMember({ data }) {
  const { image, position, full_name, description } = data;

  return (
    <li>
      <Image
        objectFit="contain"
        src={image}
        width="200"
        height="256"
        alt="Staff"
      />
      <div className={cls.txtContent}>
        <h3>{full_name}</h3>
        <h3>{position}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
