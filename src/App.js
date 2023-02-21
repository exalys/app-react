import './App.css'
import HeaderContainer from './containers/header/header.container'
import {Login} from './components/login.component'
import CategoriesList from './components/categories/categories.component'
import CategoriesAjax from './components/categories/categories.ajax'

const categories = [
  {id:1 , 
  name:'cat1',
  count: 4,
  lastUpdate: 1676974378 },
  {id:2 , 
    name:'nom',
    count: 1,
    lastUpdate: 1676974378 }
]

const handleLogin = (identifiant) => {
  console.log(identifiant)
}


function App() {
  const handleDisplay = (id) => {
    console.log(id)
  }
  return (
    <div className='container'>
      <HeaderContainer />
      <Login onLogin={handleLogin}/>
      {/* <h2>Salut {identifiant}</h2> */}
      {/* <CategoriesList categories={categories} onDisplayItem={handleDisplay}/> */}
      <CategoriesAjax onDisplayItem={handleDisplay} />

    </div>
  )
}

export default App
