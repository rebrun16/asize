import { useState } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer"
import Header from './components/Header/Header';
import Popop from './components/Popop/Popop';
import Modal from './components/Modal/Modal';
import Question from './components/Question/Question';
import { SimpleSlider } from './components/SimpleSlider/SimpleSlider';
import "./components/Modal/modal.scss";

function App() {
  const [open, setOpen] = useState(false);

  
  return (
    <div className="App">
      <Header/>
      <SimpleSlider/>
      <Question/>
      <Footer/>
      <Modal open={open} setOpen={setOpen}>
        <Popop/>
      </Modal>
    </div>
  );
}

export default App;
