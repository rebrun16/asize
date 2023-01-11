import "./header.scss"
import PhoneIcon from '@mui/icons-material/Phone';
const Header = () => {

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <img src="/public/img/Logo-AIE 1.png" alt="logo"/>
          left
        </div>
        <div className="right">
          <p className="text">Nous découvrir</p>
          <p className="text">Nos activités</p>
          <p className="text">Nos actualités</p>
          <p className="text">Nos adresses</p>
          <p className="text">Postuler</p>
          <div className="buttons">
            <PhoneIcon/>
            <button className="button">0596 76 38 18</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;