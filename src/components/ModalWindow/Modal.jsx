import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import cls from "./Modal.module.scss";

export default function ModalWindow({ modalTextInfo, isOpen, handleClose }) {
  const { title, description } = modalTextInfo;

  return (
    <div>
      <Modal
        className={cls.Wrapper}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={cls.Modal}>
            <h2 id="transition-modal-title">{title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              id="transition-modal-description"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
