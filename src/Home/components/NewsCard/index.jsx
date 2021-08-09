import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import cls from "./NewsCard.module.scss";

export default function NewsCard() {
  return (
    <Card className={cls.root}>
      <CardActionArea>
        <CardMedia
          className={cls.media}
          image="/images/cardImg.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <h2>Lizard</h2>
          <p>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex justify-content-between mb-3">
        <p className="ps-2">20.02.2012</p>
        <a className="pe-2" href="#">
          Преступления
        </a>
      </CardActions>
    </Card>
  );
}
