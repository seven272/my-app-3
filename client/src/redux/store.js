import { configureStore } from '@reduxjs/toolkit'
import testSlice from './slices/testSlice'

const store = configureStore({
  reducer: {
    // Свойство quiz будет внутри объекта общего состояния: state.counter
    test:testSlice
  },
})

export default store
