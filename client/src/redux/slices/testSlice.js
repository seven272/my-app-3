import { createSlice } from '@reduxjs/toolkit'


// Начальное значение
const initialState = {
  name: 'Воронкова Ирина',
  job: 'подолог',
  photo: ''
}

const testSlice = createSlice({
  name: 'quiz',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    }
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setName } = testSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default testSlice.reducer
