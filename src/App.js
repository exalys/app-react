import './App.css'
import HeaderContainer from './containers/header/header.container'
import {Login} from './components/login.component'
import CategoriesList from './components/categories/categories.component'
import CategoriesAjax from './components/categories/categories.ajax'

function App() {
  const handleDisplay = (id) => {
    console.log(id)
  }
  return (
    <div className='container'>
      <HeaderContainer />
      <Login />
      <CategoriesAjax onDisplayItem={handleDisplay} />
    </div>
  )
}

export default App