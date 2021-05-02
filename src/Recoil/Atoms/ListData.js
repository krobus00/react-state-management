import { atom } from 'recoil'

export const ListData = atom({
  key: 'ListData',
  default: [{ id: Date.now(), judul: 'Belajar recoil' }],
})
