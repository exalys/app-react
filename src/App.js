import './App.css'
import HeaderContainer from './containers/header/header.container'
import {Login} from './components/login.component'
import CategoriesList from './components/categories/categories.component'

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

const handleDisplay = (id) => {
  console.log(id)
}

function App() {
  return (
    <div className='container'>
      <HeaderContainer />
      <Login onLogin={handleLogin}/>
      {/* <h2>Salut {identifiant}</h2> */}
      <CategoriesList categories={categories} onDisplayItem={handleDisplay}/>

    </div>
  )
}

export default App
