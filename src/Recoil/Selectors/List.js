import { selector } from 'recoil'
import { ListData } from '../Atoms/ListData'

export const listTodo = selector({
  key: 'listTodo',
  get: ({ get }) => {
    const currentList = get(ListData)
    return {
      data: currentList.length ? currentList : 'Data kosong!',
      count: currentList.length,
    }
  },
})

export const addTodo = selector({
  key: 'addTodo',
  set: ({ get, set }, judul) => {
    const currentList = get(ListData)
    set(ListData, [...currentList, { id: Date.now(), judul: judul }])
  },
})

export const removeTodo = selector({
  key: 'removeTodo',
  set: ({ get, set }, id) => {
    const currentList = get(ListData)
    set(
      ListData,
      currentList.filter((todo) => todo.id !== id)
    )
  },
})
