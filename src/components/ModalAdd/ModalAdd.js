import React from "react";
import ReactDOM from "react-dom";

import './ModalAdd.css';

function ModalAdd({children, openModal, setOpenModal}){
    return ReactDOM.createPortal(
        <div className="ModalAdd">
            <div className="boxMessage">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export {ModalAdd}