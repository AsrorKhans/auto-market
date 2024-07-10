import { IUser } from '@shared/types/ICars.ts';
import { create } from 'zustand';

export interface ICatalogStore {
  users: IUser[];
  setUsers: (users: IUser[]) => void;
  removeUserById: (id: number) => void;
}

export const useCatalogStore = create<ICatalogStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  removeUserById: (id) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    }));
  },
}));
