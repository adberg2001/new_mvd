import Grid from "@material-ui/core/Grid";
import React from "react";
import NewsCard from "../NewsCard";
import cls from "./NewsList.module.scss";
import { Button } from "@material-ui/core";

export default function NewsList() {
  return (
    <div className={cls.container}>
      <Grid container justifyContent="center" spacing={3}>
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
      <Button className={cls.Btn} color="primary" variant="contained">
        Еще
      </Button>
    </div>
  );
}
