import React from 'react';
import cls from './Management.module.scss';
import StaffMember from './StaffMember';

export default function Management({ management }) {
  return (
    <section className={`${cls.main} container`}>
      <h2 className={'section__heading'}>Руководство</h2>
      <ul>
        {management.map((staff) => (
          <StaffMember key={staff.id} data={staff} />
        ))}
      </ul>
    </section>
  );
}
