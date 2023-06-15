import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import MenuItem from 'antd/es/menu/MenuItem'
import {FC} from 'react'

const AdminSidebar:FC = () => {
  return (
    <Sider>
        <Menu theme='dark'>
            <MenuItem>Products</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem danger>Logout</MenuItem>
        </Menu>
    </Sider>
  )
}

export default AdminSidebar