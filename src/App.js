import './App.css'
import HeaderContainer from './containers/header/header.container'
import {Login} from './components/login.component'
import CategoriesList from './components/categories/categories.component'

const categories = [
  {id:1 , 
  name:'nom',
  count: 4,
  lastUpdate: 1676974378 },
  {id:2 , 
    name:'nom',
    count: 9,
    lastUpdate: 1676974378 }
]

function App() {
  return (
    <div className='container'>
      <HeaderContainer />
      <Login />
      <CategoriesList categories={categories}/>
    </div>
  )
}

export default App
