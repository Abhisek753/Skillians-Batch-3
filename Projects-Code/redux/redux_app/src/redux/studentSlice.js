import { createSlice } from "@reduxjs/toolkit";

const studentSlice=createSlice({
  name:"students",
  initialState:[],
  reducers:{
    addStudent:(state,action)=>{
        state.push(action.payload);
    },
     deleteStudent:(state,action)=>{
       return state.filter(student=>student.id!==action.payload)
    }
  }

});

export const {addStudent,deleteStudent} = studentSlice.actions;
export default studentSlice.reducer;