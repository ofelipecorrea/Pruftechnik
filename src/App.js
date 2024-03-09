import "./App.css";
import Logo from "./elements/img/logo.png";
import Bra from "./elements/img/Flag-of-Brazil-01-1.svg";
import Eua from "./elements/img/America-01-1.svg";
import Spa from "./elements/img/spain-country-flag-icon.svg";

function App() {
  return (
    <div className="App">
      <div className="YellowBlock" />
      <div className="LoginForm">
        <div className="logo">
          <img src={Logo} alt="LogoTechnik" />
        </div>
        <div className="FormLogin">
          <p className="TitleLogin" id="Language">
            Autenticação
          </p>
          <div className="FlagLanguage">
            <img src={Eua} id="FlagEUA" alt="FlagEUA" />
            <img src={Bra} id="FlagBRA" alt="FlagBRA" />
            <img src={Spa} id="FlagSPA" alt="FlagSPA" />
          </div>
          <form className="Form">
            <input
              name="E-mail"
              type="email"
              placeholder="E-mail"
              required
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            ></input>
            <a href="./display/recoveryPass/index.js">
              <input type="submit" value="Acessar"></input>
            </a>
          </form>
        </div>
      </div>
      <div className="YellowBlock" />
    </div>
  );
}

export default App;
