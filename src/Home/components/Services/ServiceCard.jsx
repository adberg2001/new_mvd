import React from "react";
import { Card } from "@material-ui/core";
import cls from "./Services.module.scss";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";

const ServiceCard = () => {
  return (
    <Grid item xs={12} md={6} lg={4}>
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
    </Grid>
  );
};

export default ServiceCard;
