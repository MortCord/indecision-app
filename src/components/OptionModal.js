import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <div>
        <Modal isOpen={!!props.selectedOption} contentLabel='Selected Option' onRequestClose={props.handleCloseModal}>
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleCloseModal}>Okay</button>
        </Modal>
    </div>
)

export default OptionModal;