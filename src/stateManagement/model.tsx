import {create} from 'zustand';


interface ModalState {
  isOpenAdd: boolean;
  isOpenEdit: boolean;
  record: any | null;
  toggleModalAdd: () => void;
  toggleModalEdit: ( record: any) => void;
}


const useModalStore = create<ModalState>((set) => ({
  isOpenAdd: false,
  isOpenEdit: false,
  record: null,
  toggleModalAdd: () => set((state) => ({ isOpenAdd: !state.isOpenAdd })),
  toggleModalEdit: ( record: any) =>
    set((state) =>{
      console.log(record);
      
      return  ({
        isOpenEdit: !state.isOpenEdit,
        record,
        
      })
    }),
    
}));

export default useModalStore;
