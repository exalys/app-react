import logo from './logo.png'

const HeaderContainer = () => (
  <header>
    <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top " alt="" /> 
         Application de messagerie - Alex & Fred
    </a>
    </nav>
  </header>
)

export default HeaderContainer