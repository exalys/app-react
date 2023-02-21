import axios from 'axios'

// http://localhost:8080/api/subject/category

export const Categoriesfetcher = (id) => {

  return axios.get('http://localhost:8080/api/subject/category', {

  }).then(({dataCategories}) => ({
    id: dataCategories.id,
    name: dataCategories.name,
    count: dataCategories.count,
    lastUpdate: dataCategories.lastUpdate
  }))
}