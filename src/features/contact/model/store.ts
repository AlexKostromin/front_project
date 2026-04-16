import { create } from "zustand";

type ContactModalState = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useContactModal = create<ContactModalState>((set) => ({
  open: false,
  openModal: () => set({ open: true }),
  closeModal: () => set({ open: false }),
}));
