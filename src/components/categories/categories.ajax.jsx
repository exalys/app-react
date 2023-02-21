import useSWR from 'swr'
import LoadingScreen from '../loading-screen/loading-screen'
import { Categoriesfetcher } from '../../api/categories.api'
import CategoriesError from './categories.error'
import CategoriesList from './categories.component'

const CategoriesAjax = ({id}) => {

  const { isLoading, data, error } = useSWR(id, Categoriesfetcher)

      
  return isLoading ? (
    <LoadingScreen />
) : data ? (
    <CategoriesList {...data} />
) : (
    <CategoriesError message={error} />
)
}

export default CategoriesAjax
