import PropTypes from 'prop-types'

const CategorieListItem = ({id, name, count, lastUpdate, onDisplayCategorie}) => {

    const dateUpdate = new Date(lastUpdate*1000).toLocaleDateString('fr-be')
    const timeUpdate = ''
    console.log(dateUpdate)

  return (
  <div onClick={() => onDisplayCategorie(id)} className="container border border-secondary  mb-3">   
    <div className="row p-2">
      <div className="col-md-6 h3">{name}</div>
      <div className="col-md-6">{count>1
        ? `nb de messages` 
        : `nb de message`} : 
        <span className="h4"> {count}</span> 
      </div>
    </div>    

    <div className="mb-2 blockquote-footer"><em> Dernier message:</em> {dateUpdate}</div>
  </div>      
  )
}

const CategoriesList = ({categories, onDisplayItem}) => {

  const categoriesJSX = categories.map(
    categorie => <CategorieListItem {...categorie} key={categorie.id}
    onDisplayCategorie={onDisplayItem} />
  )


  return (
    <>
      <h2 className="text-center mb-5 mt-5">Liste des Catégories</h2>
      <div className="container">
        {categoriesJSX}
      </div>

    </>
  )

}

CategoriesList.defaultProps = {
  onDisplayItem : () => {}
}

CategoriesList.propTypes = {
  onDisplayItem : PropTypes.func
}

export default CategoriesList