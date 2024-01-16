import { create } from 'zustand'

export const useGameStore = create((set) => ({
  score: 0,
  result: null,
  usersChoice: null,
  housePicked: null,
  setScore: (score) => set({ score }),
  setResult: (result) => set({ result }),
  setUsersChoice: (usersChoice) => set({ usersChoice }),
  setHousePicked: (housePicked) => set({ housePicked })
}))
