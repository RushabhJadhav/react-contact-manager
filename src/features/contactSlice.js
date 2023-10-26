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
                id: nanoid().slice(0, 4),
                obj: action.payload.name,
            }
            state.contactItem.push(todo)
        }
    }
})

export const {addContact} = contactSlice.actions

export default contactSlice.reducer