import {create} from 'zustand';
import { IUserDetails } from 'Interfaces/AuthInterface';

interface IAuthStore extends IUserDetails {
    login: (loginData:IUserDetails) => void,
    logout: () => void,
}

 const useAuthStore = create<IAuthStore>((set) => ({
    isAdmin:false,
    isUser:false,
    firstName:null,
    lastName:null,


    login: (loginData:IUserDetails) => {
        set(() => {
            return {...loginData}
        })
    },
 
    logout: () => {
        set(() => {
            return {
                isAdmin:false,
                isUser:false,
                firstName:null,
                lastName:null,
            }
        })
    }
 }));



 export default useAuthStore