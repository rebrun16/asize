import { useState } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';
import Popop from './components/Popop/Popop';
// import Modal from './components/Modal/Modal';
import Question from './components/Question/Question';
import { SimpleSlider } from './components/SimpleSlider/SimpleSlider';
// import "./components/Modal/modal.scss";

function App() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Header/>
      <SimpleSlider/>
      <Question/>
      <Footer/>
      <Popop/>
      {/* <button onClick={() => setOpen(true)} className='open-modal-btn'>+</button>
      {
        open && (
        <div className="overlay">
          <div className="modal">
            <svg onClick={() => setOpen(false)}  height="200" viewBox="0 0 200 200" width="200">
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
        )
      } */}
      {/* <Modal open={open} setOpen={setOpen}>
        <p>lorem</p>
      </Modal> */}
    </div>
  );
}

export default App;
