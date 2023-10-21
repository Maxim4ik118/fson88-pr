import { useEffect } from 'react';
import { Backdrop, CloseButton, MainContent } from './ModalWindow.styled';

export const Modal = ({ modalData, onCloseModal }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.code === `Escape`) onCloseModal();
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onCloseModal]);

  const handlerBackdropClick = event => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  return (
    <Backdrop onClick={handlerBackdropClick}>
      <MainContent>
        <CloseButton onClick={() => onCloseModal()}>&times;</CloseButton>
        <div>
          <img className="modal-img" src={modalData.coverImage} alt="" />
          <ul className="modal-ul">
            <li>Title: {modalData.title}</li>
            <li>Brand: {modalData.brand}</li>
            <li>Type: {modalData.type}</li>
            <li>Price: {modalData.price}</li>
          </ul>
        </div>
      </MainContent>
    </Backdrop>
  );
};
