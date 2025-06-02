import React from 'react';
import Modal from 'react-modal';
import "./styles.scss";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface IModalLoading {
  opened: boolean;
}

export const ModalLoading: React.FC<IModalLoading> = (props) => {
  const { opened } = props;
  return (
    <Modal
      isOpen={opened}
      ariaHideApp={false}
      style={customStyles}
      onRequestClose={() => { }}
      overlayClassName="--overlay"
      className="modal-loading"
    >
      <img src='/images/loading.gif' alt='loading-gif'/>
    </Modal>
  )
}

export default ModalLoading;