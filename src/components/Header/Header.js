//Components
import Moto from "./Moto";
import Submit from "./Submit";

//Styles
import "../../styles/header.css";
import "../../styles/utils/button.css";

const Header = ({quote}) => {
  return (
    <header className="Hero">
        <div/>
        <Moto quote = {quote}/>
        <Submit/>
    </header>
  )
}

export default Header