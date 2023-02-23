import logo from './logo.png'

const HeaderContainer = () => (
  <header>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <span className='mx-3'>Application de messagerie - Alex & Fred</span>
        </p>
      </div>
    </nav>
    <h1 className="my-4 text-center">Bienvenue sur notre App</h1>
  </header>
)

export default HeaderContainer