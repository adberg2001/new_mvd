import React from "react";
import { Card } from "@material-ui/core";
import cls from "./Services.module.scss";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <Card className={cls.Card}>
      <div className={"d-flex flex-column"}>
        <Image
          width={80}
          height={80}
          src={"/images/services/service1.svg"}
          alt={"service"}
        />
        <p className={"text-center"}>Услуга</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
