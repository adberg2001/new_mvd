import React, { useContext } from 'react';
import Image from 'next/image';
import { modalWindowContext } from '../../../../contexts/ModalWindowProvider';

const ServiceCard = ({ data }) => {
  const { showModalWindow } = useContext(modalWindowContext);

  const { image, title, description } = data;

  const handleModalShow = () => {
    showModalWindow({ title, description });
  };

  return (
    <div onClick={handleModalShow} className={'SliderCard d-flex flex-column'}>
      <Image
        width={70}
        height={70}
        objectFit={'contain'}
        src={image}
        alt={`${title} logo`}
      />
      <p className={'text-center'}>{title}</p>
    </div>
  );
};

export default ServiceCard;
