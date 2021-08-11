import React, {useEffect, useState} from "react";
import { Calendar } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";

import cls from "./Calendar.module.scss";

const NewsCalendar = ({onCalendarChange, touched, setTouched}) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    touched && onCalendarChange(date)
  }, [date])

  return (
    <>
      <div className={cls.DesktopCalendar}>
        <Calendar date={date} onChange={date => {
          setDate(date)
          setTouched(true)
        }} />
      </div>

      <div className={cls.MobileDesktop}>
        <DatePicker
          label="Выберите дату"
          value={date}
          onChange={date => {
            setDate(date)
            setTouched(true)
          }}
          animateYearScrolling
        />
      </div>
    </>
  );
};

export default NewsCalendar;
