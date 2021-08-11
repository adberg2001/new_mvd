import React from 'react';
import { Card } from '@material-ui/core';
import cls from './Services.module.scss';
import Image from 'next/image';

const ServiceCard = ({ data }) => {
  return (
    <Card className={cls.Card}>
      <div className={'d-flex flex-column'}>
        <Image
          width={80}
          height={80}
          objectFit={'contain'}
          src={data.image}
          alt={'service'}
        />
        <p className={'text-center'}>{data.title}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
