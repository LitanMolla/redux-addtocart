import { createSlice } from '@reduxjs/toolkit'

export const AddToCard = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToardS: (state,action) => {
      const iddata = state.cartItems.find((item)=>item.id===action.payload.id) // find out old data and new input data id same or not
      if (iddata) {
        iddata.quantity+=1 // if booth id same add only quantity
      }
      else{
        state.cartItems.push({...action.payload,quantity:1}) // jodi new id ager datay khuje na pawa jay full data push hobe
      }
    },
    quantityPlusF: (state,action) => {
      const iddata = state.cartItems.find((item)=>item.id===action.payload.id) 
      if (iddata) {
        iddata.quantity+=1 
      }
    },
    quantityMinuF: (state,action) => {
      const iddata = state.cartItems.find((item)=>item.id===action.payload.id) 
      if (iddata.quantity>1) {
        iddata.quantity-=1 
      }
    },
    cartRemove: (state,action) => {
      state.cartItems.map((item,index)=>{
        if (item.id===action.payload.id) {
          state.cartItems.splice(index,1)
        }
      })
    },
  }
})


export const { addToardS,quantityPlusF,quantityMinuF,cartRemove } = AddToCard.actions

export default AddToCard.reducer