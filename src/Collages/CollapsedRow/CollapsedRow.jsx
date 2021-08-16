import { Button, Collapse } from "@material-ui/core";
import cls from "./CollapsedRow.module.scss";
import { useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import Image from "next/image";

export default function CollapsedRow({ ...rest }) {
  const [open, setOpen] = useState(false);
  const { description, title, image, link } = rest;

  return (
    <li className={cls.row}>
      <div className={`d-flex align-items-center ${cls.row__head} p-4`}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <Remove /> : <Add />}
        </Button>
        <h3 className={`m-0 ms-4`}>{title}</h3>
      </div>
      <Collapse in={open}>
        <div
          className={`d-flex flex-column flex-md-row p-4 ${cls.row__content}`}
        >
          {image && (
            <div className={`${cls.row__image_wrapper} col-md-3 col-12`}>
              <Image src={image} layout="fill" className={cls.image} />
            </div>
          )}
          <div className={`col-md-9 col-12`}>
            <div
              className={cls.Description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <a href={link} target={"_blank"}>
              {link}
            </a>
          </div>
        </div>
      </Collapse>
    </li>
  );
}
