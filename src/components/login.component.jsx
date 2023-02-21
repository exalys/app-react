import {useState} from 'react'
import {PropTypes} from 'prop-types'

export const Login = () => {

  const [identifiant, setIdentifiant] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Tentative de login, identifiant = ', identifiant)
  }
  
  return (<>
    <h1>Bienvenue sur notre App</h1>
    <p>Tout d'abord, identifiez-vous :</p>
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <input type="text" className="form-control" nbame="inputLogin" id="inputLogin" placeholder="Entrer votre identifiant" onChange={(e) => setIdentifiant(e.target.value)} value={identifiant} />
      </div>
      <div className="col-md-6">
      <button type="submit" className="btn btn-primary">Connexion</button>
      </div>
    </form>
    </>)

}
Login.defaultProps = {
  
}

Login.propTypes = {
  
}