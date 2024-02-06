import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "add",
    initialState: {
        list: [],
        editItem: {}
    },
    reducers: {
        addText: (state, { payload }) => {
            state.list.push({
                id: new Date().getTime().toString(),
                text: payload.str.value,
                date:payload.date.value
            });
            state.editItem = {}
        },
        deleteList: (state, { payload }) => {
            state.list = state.list.filter((e) => e.id !== payload);
        },
        updateEditItem: (state, { payload }) => {
            const existingItem = state.list.find((item) => item.id === payload.id);
            if (existingItem) {
                existingItem.text = payload.text;
                existingItem.date =payload.date
                state.editItem = payload; 
            }
            
        },
        resetItem:(state,{payload})=>{
            state.editItem ={}
        }
    }
});

export const selectAdd = (state) => state.add;
export const addReducer = addSlice.reducer;
export const { addText, deleteList, updateEditItem,resetItem } = addSlice.actions;