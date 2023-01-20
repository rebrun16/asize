import React, { useState } from 'react';

import Popop from '../Popop/Popop';
import './footer.scss';
const Footer = () => {
  const [open, setOpen] = useState(false);

  const Modal = ({ open, setOpen, children }) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
      <div className="modal">
        {children}
      </div>
    </div>
  );

  return (
    <div className="footer">
      <div className="text">
        <img className="contact" src="/img/Call to Action2.png"/>
        <button className="open-modal-btn" onClick={() => setOpen(true)} >
          Contact US
        </button>
      </div>
      <Modal className="modal" open={open} setOpen={setOpen}>
        <div className="modal-popop" >
          <svg onClick={() => setOpen()}  height="400" viewBox="0 0 400 400" width="400">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <Popop/>
        </div>
      </Modal>
    </div>
  );
};

export default Footer;