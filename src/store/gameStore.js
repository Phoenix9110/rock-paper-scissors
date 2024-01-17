import { create } from 'zustand'

export const useGameStore = create((set) => ({
  score: 0,
  matchResult: null,
  userPicked: null,
  housePicked: null,
  setScore: (score) => set({ score }),
  setMatchResult: (matchResult) => set({ matchResult }),
  setUserPicked: (userPicked) => set({ userPicked }),
  setHousePicked: (housePicked) => set({ housePicked })
}))
