import React, { useState } from 'react'
import Popop from '../Popop/Popop';
import "./modal.scss"

const Modal = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className={`overlay animated ${open ? "show" : ''}`}>
      <div className="modal">
        <svg onClick={() => setOpen(true)}  height="200" viewBox="0 0 200 200" width="200">
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <Popop/>
      </div>
    </div>
  )
}


export default Modal