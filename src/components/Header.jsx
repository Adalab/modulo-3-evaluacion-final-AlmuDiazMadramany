
import hpLogo from "../images/harry-potter-logo.webp";

function Header() {
  return (
    <div className="header_logo">
    <img className="hp_logo" src={hpLogo} alt="Harry Potter logo" />
    </div>
  )
}

export default Header