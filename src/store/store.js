import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReal: true,
  count: 0,
}

const slice = createSlice({
  name: 'redux-test',
  initialState,
  reducers: {
    toggleReal(state, action){
      console.log(action);
      state.isReal = !state.isReal;
    },
    countUp(state){
      state.count += 1;
    },
    countDown(state){
      state.count -= 1;
    }
  }
})


const store = configureStore({
  reducer: slice.reducer,
});

export default store;
export const reduxAction = slice.actions;
export const reduxReducer = slice.reducer;