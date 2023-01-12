import React, { useState } from 'react'
import "./modal.scss"

const Modal = ({active, setActive, children}) => {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        {children}
        <button className='open-btn' onClick={() => setModalActive(false)}>Open modal</button>
      </div>
    </div>
  )
}

export default Modal