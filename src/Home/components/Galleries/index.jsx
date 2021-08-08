import React from "react";
import cls from "./Galleries.module.scss";

const Galleries = () => {
  return (
    <div className={cls.container}>
      <div>
        <p>Фотогалерея</p>
      </div>
      <div>
        <p>Видеогалерея</p>
      </div>
    </div>
  );
};

export default Galleries;
