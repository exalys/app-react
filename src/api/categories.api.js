import axios from 'axios'

// http://localhost:8080/api/subject/category

export const Categoriesfetcher = (id) => {

  console.log('request');
  

  return axios.get('http://localhost:8080/api/subject/category').then(({ data }) => {
    console.log(data);

    return data;
    
  })
    // .then(({data}) => ({
    //   id: data.id,
    //   name: data.name,
    //   count: data.count,
    //   lastUpdate: data.lastUpdate
    // }))
  
}