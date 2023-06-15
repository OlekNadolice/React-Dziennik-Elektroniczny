import {FC} from 'react'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Container from '../Layout/Container'
import LoginPage from 'pages/LoginPage/LoginPage'
const Routing:FC = () => {

 const routes = createBrowserRouter(createRoutesFromElements(


    <Route path='/' element={<Container/>} >


    <Route path='/login' element={<LoginPage/>}/>
    


    </Route>
 ))



  return (
    <RouterProvider router={routes}/>
  )
}

export default Routing