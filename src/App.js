import './App.css'
import HeaderContainer from './containers/header/header.container'
import {Login} from './components/login.component'
import CategoriesList from './components/categories/categories.component'
import CategoriesAjax from './components/categories/categories.ajax'
import {useState} from 'react'

function App() {

  const handleLoginSubmit = (pseudo) => {
    console.log(`[App.js] Pseudo de l'utilisateur : ${pseudo}`)
  }

  const handleDisplay = (id) => {
    console.log(id)
  }

  return (
    <div className='container'>
      <HeaderContainer />
      <Login onLoginSubmit={handleLoginSubmit} />
      <CategoriesAjax onDisplayItem={handleDisplay} />
    </div>
  )

}

export default App