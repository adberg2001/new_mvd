import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import cls from './NewsCard.module.scss';
import Link from 'next/link';

export default function NewsCard({ id, ...rest }) {
  const { images, title, content, category } = rest;

  return (
    <Card className={cls.root}>
      <CardActionArea>
        <CardMedia
          className={cls.media}
          image={images[0].image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <h2>{title.length > 20 ? title.slice(0, 22) + ' ...' : title}</h2>

          <div
            className={cls.media__description}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex justify-content-between mb-3">
        <p className="ps-2 m-0">20.02.2012</p>
        <Link href={`/news/${category.id}`}>
          <a>Преступления</a>
        </Link>
      </CardActions>
    </Card>
  );
}
