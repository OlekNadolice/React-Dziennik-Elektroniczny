import {FC} from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Container from '../Layout/Container'
import AdminProductsPage from '../Pages/Admin/AdminProductsPage/AdminProductsPage'
const Routing:FC = () => {

 const routes = createBrowserRouter(createRoutesFromElements(


    <Route path='/' element={<Container/>} >



    <Route path='admin' element={<AdminProductsPage/>}/>


    </Route>
 ))



  return (
    <RouterProvider router={routes}/>
  )
}

export default Routing