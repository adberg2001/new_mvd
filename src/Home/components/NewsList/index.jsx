import Grid from '@material-ui/core/Grid';
import React from 'react';
import NewsCard from '../NewsCard';
import cls from './NewsList.module.scss';

export default function NewsList() {
  return (
    <Grid
      className={cls.container}
      container
      justifyContent="center"
      spacing={3}
    >
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <NewsCard />
      </Grid>
    </Grid>
  );
}
