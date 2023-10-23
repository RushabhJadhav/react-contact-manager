import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contactItem: []
}

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.contactItem.push(todo)
        }
    }
})

export const {addContact} = contactSlice.actions

export default contactSlice.reducer