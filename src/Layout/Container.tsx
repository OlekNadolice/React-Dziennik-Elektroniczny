import {FC} from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import 'global.css'
import AdminSidebar from './Sidebar/AdminSidebar'

const Container:FC = () => {
  return (
    <>
      <Layout className='App'>
        <AdminSidebar/>
        <Content>
       <Outlet/>
       </Content>
       </Layout>
    </>
  )
}

export default Container