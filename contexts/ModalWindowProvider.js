import React, { useState } from "react";
import ModalWindow from "../src/components/ModalWindow/Modal";

export const modalWindowContext = React.createContext(null);

const ModalWindowProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTextInfo, setModalTextInfo] = useState("");

  const showModalWindow = (textData) => {
    setIsOpen(true);
    setModalTextInfo(textData);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <modalWindowContext.Provider
      value={{
        isOpen,
        showModalWindow,
        handleClose,
      }}
    >
      <ModalWindow
        modalTextInfo={modalTextInfo}
        isOpen={isOpen}
        handleClose={handleClose}
      />
      {children}
    </modalWindowContext.Provider>
  );
};

export default ModalWindowProvider;
