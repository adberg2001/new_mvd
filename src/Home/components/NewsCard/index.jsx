import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cls from './NewsCard.module.scss';

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
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex justify-content-between mb-3">
        <Typography variant="body2" className="ps-2">20.02.2012</Typography>
        <a className="pe-2" href="#">Преступления</a>
      </CardActions>
    </Card>
  );
}
