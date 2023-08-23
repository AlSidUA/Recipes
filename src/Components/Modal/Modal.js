import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import Detiles from "../Detiles/Detiles";


const Modal  = ({isOpen, onClose, children}) => {
    const modalClose = () => onClose();
    <Detiles modalClose={modalClose}/>
    if (!isOpen) return null;
    return ReactDOM.createPortal (
        <div className="modal">
            <div className="modal-content">
                {
                    children
                }
                
            </div>
        </div>,
        document.getElementById("modal-root")
    );
    
};

export default Modal;