import PropTypes from 'prop-types'
import clsx from 'clsx'



const CategorieListItem = ({id, name, count, mastMessage}) => {

  return (
    <div className="border border-primary">
      <p>{name} - Nombre de message(s): {count}</p>
    </div>
  )
}

const CategoriesList = ({categories}) => {

  const categoriesJSX = categories.map(
    categorie => <CategorieListItem {...categorie} key={categorie.id} />
  )


  return (
    <>
      <h2>Liste des Catgories</h2>
      <div>
        {categoriesJSX}
      </div>

    </>
  )

}

CategoriesList.propTypes = {

}

export default CategoriesList