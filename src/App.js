import './App.css'
import HeaderContainer from './containers/header/header.container'
import {Login} from './components/login.component'
import CategoriesList from './components/categories/categories.component'
import CategoriesAjax from './components/categories/categories.ajax'
import {useState} from 'react'

function App() {

  const [utilisateur, setUtilisateur] = useState('')

  const handleLoginSubmit = (pseudo) => {
    console.log(`[App.js] Pseudo de l'utilisateur : ${pseudo}`)
    setUtilisateur(pseudo)
  }

  const handleDisplay = (id) => {
    console.log(id)
  }

  return (
    <div className='container'>
      <HeaderContainer />
      <Login onLoginSubmit={handleLoginSubmit} />
      {utilisateur && 
      <>
        <h3 className='text-center text-primary'>Hello {utilisateur}</h3>
        <CategoriesAjax onDisplayItem={handleDisplay} />
      </>
      }
    </div>
  )

}

export default App