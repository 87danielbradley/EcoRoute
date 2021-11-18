import React from 'react';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'login':
            component = <LoginContainer />;
            break;
        case 'signup':
            component = <SignupContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button onClick={ closeModal } id="modal-close-button">&times;</button>
                { component }
            </div>
        </div>
    );
};

export default Modal; 