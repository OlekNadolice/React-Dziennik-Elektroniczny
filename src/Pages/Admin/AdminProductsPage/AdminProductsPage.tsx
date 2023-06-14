import {FC} from 'react'
import {Table, Button} from 'antd'
import useAdminProductsPage from './useAdminProductsPage';

const AdminProductsPage:FC = () => {
  const {columns, data, isLoading, error, isFetching} = useAdminProductsPage()


  
  
  if(isFetching) return <div>Loading...</div>
 
  
  return (
    <>
      <Button>Add New Product</Button>
    <Table dataSource={[]} columns={columns} loading={isLoading} />
    </>
  )
}

export default AdminProductsPage