import {useState} from 'react'
import PropTypes from 'prop-types'

export const Login = ({onLoginSubmit}) => {

  const [pseudo, setPseudo] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`[login.component.jsx] Connexion avec le pseudo ${pseudo}`)
    onLoginSubmit(pseudo)
    setPseudo("")
  }
  
  return (<>
    <form className="row my-4 text-center" onSubmit={handleSubmit}>
      <div className="offset-md-4 col-md-3">
        <input type="text" className="form-control" name="pseudo" id="pseudo" placeholder="Entrez ici votre pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
      </div>
      <div className="col-md-1">
        <button type="submit" className="btn btn-primary">Connexion</button>
      </div>
    </form>
  </>)

}
Login.defaultProps = {
  pseudo: "",
  onLoginSubmit: () => {}
}

Login.propTypes = {
  pseudo: PropTypes.string.isRequired,
  onLoginSubmit: PropTypes.func
}