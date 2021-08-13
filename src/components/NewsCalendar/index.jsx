import React, { useEffect, useState } from 'react';
import { Calendar } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import cls from './Calendar.module.scss';
import { Button } from '@material-ui/core/Button';
import RubricsNav from '../RubricsNav';

const NewsCalendar = ({ onCalendarChange, touched, setTouched }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    touched && onCalendarChange(date);
  }, [date, touched]);

  return (
    <>
      <div className={cls.DesktopCalendar}>
        <Calendar
          date={date}
          onChange={(date) => {
            setDate(date);
            setTouched(true);
          }}
        />
        {touched && (
          <button
            onClick={() => onCalendarChange('')}
            className={cls.calendar__remove}
          >
            Сбросить
          </button>
        )}
      </div>
      <div className={cls.descMenuWrapper}>
        <RubricsNav />
      </div>

      <div className={cls.MobileDesktop}>
        <div className={`d-flex align-items-center me-auto`}>
          <DatePicker
            label="Выберите дату"
            value={date}
            onChange={(date) => {
              setDate(date);
              setTouched(true);
            }}
            animateYearScrolling
          />
          {touched && (
            <Button
              color="primary"
              onClick={() => onCalendarChange('')}
              className={cls.calendar__remove}
            >
              Сбросить
            </Button>
          )}
        </div>
        <RubricsNav />
      </div>
    </>
  );
};

export default NewsCalendar;
