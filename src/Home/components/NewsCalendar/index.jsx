import React, {useEffect, useState} from "react";
import { Calendar } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";

import cls from "./Calendar.module.scss";

const NewsCalendar = ({onCalendarChange, setTouched}) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTouched(true)
    onCalendarChange(date)
  }, [date])

  return (
    <>
      <div className={cls.DesktopCalendar}>
        <Calendar date={date} onChange={setDate} />
      </div>

      <div className={cls.MobileDesktop}>
        <DatePicker
          label="Выберите дату"
          value={date}
          onChange={setDate}
          animateYearScrolling
        />
      </div>
    </>
  );
};

export default NewsCalendar;
