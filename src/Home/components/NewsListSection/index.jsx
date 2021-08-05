import React from 'react';
import NewsList from '../NewsList';
import cls from './NewsListSection.module.scss';

export default function NewsListSection() {
  return (
    <section className={[cls.section, 'container'].join(' ')}>
      <h2 className={cls.heading}>Важные новости</h2>
      <div className={cls.contentWrapper}>
        <NewsList />
      </div>
    </section>
  );
}
