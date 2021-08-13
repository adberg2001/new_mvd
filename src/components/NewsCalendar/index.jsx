import React, { useEffect, useState } from 'react';
import { Calendar } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';

import cls from './Calendar.module.scss';
import { Button } from '@material-ui/core';

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

      <div className={cls.MobileDesktop}>
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
            variant="contained"
            onClick={() => onCalendarChange('')}
            className={cls.calendar__remove}
          >
            Сбросить
          </Button>
        )}
      </div>
    </>
  );
};

export default NewsCalendar;
