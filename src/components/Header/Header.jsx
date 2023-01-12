import "./header.scss"
import PhoneIcon from '@mui/icons-material/Phone';
const Header = () => {

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <img src="/img/Logo-AIE 1.png" alt="logo"/>
        </div>
        <div className="right">
        <div class="dropdown">
            <button class="dropbtn">Nous découvrir</button>
            <div class="dropdown-content">
              <a href="#">Ressourceries</a>
              <a href="#">Borne de collecte</a>
              <a href="#">Valorisation textile</a>
              <a href="#">Nos boutiks</a>
              <a className="formations" href="#">Nos formations</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Nos activités</button>
            <div class="dropdown-content">
              <a href="#">Ressourceries</a>
              <a href="#">Borne de collecte</a>
              <a href="#">Valorisation textile</a>
              <a href="#">Nos boutiks</a>
              <a className="formations" href="#">Nos formations</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Nos actualités</button>
            <div class="dropdown-content">
              <a href="#">Ressourceries</a>
              <a href="#">Borne de collecte</a>
              <a href="#">Valorisation textile</a>
              <a href="#">Nos boutiks</a>
              <a className="formations" href="#">Nos formations</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Nos adresses</button>
            <div class="dropdown-content">
              <a href="#">Ressourceries</a>
              <a href="#">Borne de collecte</a>
              <a href="#">Valorisation textile</a>
              <a href="#">Nos boutiks</a>
              <a className="formations" href="#">Nos formations</a>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Postuler</button>
            <div class="dropdown-content">
              <a href="#">Ressourceries</a>
              <a href="#">Borne de collecte</a>
              <a href="#">Valorisation textile</a>
              <a href="#">Nos boutiks</a>
              <a className="formations" href="#">Nos formations</a>
            </div>
          </div>
          <div className="buttons">
            <PhoneIcon/>
            <a className="tel" href="tel:0596763818">0596 76 38 18</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;