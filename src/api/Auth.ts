import axiosInstance from 'Common/axios'
import { ILoginCredentails } from 'Interfaces/AuthInterface'


export const loginUser = async (data:ILoginCredentails) => {
    return await axiosInstance.post('/login', data)
}