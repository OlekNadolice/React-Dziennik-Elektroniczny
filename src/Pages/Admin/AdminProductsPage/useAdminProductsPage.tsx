import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "api/Admin";

const useAdminProductsPage = () => {
    const { data, isLoading, error, isFetching } = useQuery(['getProducts'],  () => getAllProducts());
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
    
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
    
        {
          title: 'Details',
          dataIndex: 'details',
          key: 'deatails',
        },
      ];
 

      return {
        columns,
        data,
        isLoading,
        error,
        isFetching
      }
}

export default useAdminProductsPage