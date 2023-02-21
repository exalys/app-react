import {useState} from 'react'
import PropTypes from 'prop-types'

export const Login = (onLogin) => {

  const [identifiant, setIdentifiant] = useState('')
  
  // const onLogin = (e) => {
  //   e.preventDefault()
  //   console.log('Tentative de login, identifiant = ', identifiant)
  //   handleLogin(identifiant)
  // }
  
  return (<>
    <h1>Bienvenue sur notre App</h1>
    <p>Tout d'abord, identifiez-vous :</p>
    <form className="row" onSubmit={() => onLogin(identifiant)}>
      <div className="col-md-6">
        <input type="text" className="form-control" name="inputLogin" id="inputLogin" placeholder="Entrer votre identifiant" onChange={(e) => setIdentifiant(e.target.value)} value={identifiant} />
      </div>
      <div className="col-md-2">
      <button type="submit" className="btn btn-primary">Connexion</button>
      </div>
    </form>
    </>)

}
Login.defaultProps = {
  inputLogin: "",
  onLogin: () => {}
}

Login.propTypes = {
  inputLogin: PropTypes.string.isRequired,
  onLogin: PropTypes.func
}