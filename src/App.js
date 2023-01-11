
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
