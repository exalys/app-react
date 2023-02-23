import PropTypes from 'prop-types'

const CategorieListItem = ({id, name, count, icon, lastUpdate, onDisplayCategorie}) => {

    const dateUpdate = new Date(lastUpdate*1000).toLocaleDateString('fr-be')
    const timeUpdate = new Date(lastUpdate*1000).toLocaleTimeString('fr-be', { hour: '2-digit', minute: '2-digit' })
    console.log(timeUpdate)


  return (
  <div onClick={() => onDisplayCategorie(id)} className="container border border-secondary  mb-3">   
    
    <img src={`http://localhost:8080/${icon}`} alt={name} className="img-fluid" />
    <div className="row p-2">
      <div className="col-md-6 h3">{name}</div>
      <div className="col-md-3">{count>1
        ? `nb de messages` 
        : `nb de message`} : 
        <span className="h4"> {count}</span> 
      </div>
      <div className="col-md-3">
      <button onClick={() => onDisplayCategorie(id)}>Afficher les messages</button>
      </div>
    </div>    

    <div className="mb-2 blockquote-footer"><em> Dernier message:</em> le {dateUpdate} à {timeUpdate}</div>
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