import {FC} from 'react'
import { Outlet } from 'react-router'



const Container:FC = () => {
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default Container