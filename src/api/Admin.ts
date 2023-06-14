import axiosInstance from '../Common/axios';


export const getAllProducts = async () => {
    return await axiosInstance.get('/products')

}