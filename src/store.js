import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import addToardS from './slices/AddToCard'
import quantityPlusF from './slices/AddToCard'
import quantityMinuF from './slices/AddToCard'

export default configureStore({
  reducer: {
    counterST: counterSlice,
    addToCardS: addToardS,
    quantityPlusS: quantityPlusF,
    quantityMinuS: quantityMinuF,
  }
})