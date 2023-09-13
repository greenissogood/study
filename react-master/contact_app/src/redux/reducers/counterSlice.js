import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'input',
    initialState:{
        inputs: [],
    },
    reducers:{
        addInput:(state,action)=>{
            console.log(action);

            state.inputs= state.inputs.concat(action.payload)
        },
        inputName: (state,action)=>{
            
        },
        inputNum:(state,action)=>{
            
        },
        submitinput:(state,action)=>{

        }

    }
})

export const ContactReducerActions = counterSlice.actions
export default counterSlice.reducer