import {create} from 'zustand';


interface IModalStore {
    currentModal:string | null;
    handleModalState:(state:string | null) => void;
}


const useModalStore = create<IModalStore>((set) => ({
    currentModal:null,
    handleModalState:(state:string | null) => set(() => ({currentModal:state}))

}))


export default useModalStore