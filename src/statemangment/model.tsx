import create from 'zustand';


interface ModalState {
  isOpenAdd: boolean;
  isOpenEdit: boolean;
  toggleModalAdd: () => void;
  toggleModalEdit: () => void;
}


const useModalStore = create<ModalState>((set) => ({
  isOpenAdd: false,
  toggleModalAdd: () => set((state) => ({ isOpenAdd: !state.isOpenAdd })),
  isOpenEdit: false,
  toggleModalEdit: () => set((state) => ({ isOpenEdit: !state.isOpenEdit })),

}));

export default useModalStore;
