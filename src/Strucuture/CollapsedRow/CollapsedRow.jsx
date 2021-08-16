import { Button, Collapse } from "@material-ui/core";
import cls from "./CollapsedRow.module.scss";
import { useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import Image from "next/image";

export default function CollapsedRow({ ...rest }) {
  const [open, setOpen] = useState(false);
  const { description, full_name, image, position } = rest;

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
        <h3 className={`m-0 ms-4`}>{position}</h3>
      </div>
      <Collapse in={open}>
        <div
          className={`d-flex flex-column flex-md-row p-4 ${cls.row__content}`}
        >
          {image && (
            <div className={`${cls.row__image_wrapper} col-12 col-md-3`}>
              <Image src={image} layout="fill" className={cls.image} />
            </div>
          )}
          <div className={`col-12 col-md-9`}>
            <h4>{`${position} ${full_name}`}</h4>
            <h4>{description}</h4>
          </div>
        </div>
      </Collapse>
    </li>
  );
}
