import useSWR from 'swr'
import LoadingScreen from '../loading-screen/loading-screen'
import { Categoriesfetcher } from '../../api/categories.api'
import CategoriesError from './categories.error'
import CategoriesList from './categories.component'

const CategoriesAjax = ({ onDisplayItem }) => {

    const { isLoading, data, error } = useSWR(true, Categoriesfetcher)
    console.log(isLoading, data, error)



    return isLoading ? (
        <LoadingScreen />
    ) : data ? (
        <CategoriesList categories={data} onDisplayItem={onDisplayItem} />
    ) : (
        <CategoriesError message={error} />
    )
}

export default CategoriesAjax
