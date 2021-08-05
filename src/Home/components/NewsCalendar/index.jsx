import React, {useState} from 'react';
import { Calendar } from '@material-ui/pickers'
import cls from './Calendar.module.scss'

const NewsCalendar = () => {

  const [date, setDate] = useState(new Date())

  return (
    <div className={cls.calendar}>
      <Calendar date={date} onChange={(date, isFinish) => setDate(date)} />
    </div>
  );
};

export default NewsCalendar;