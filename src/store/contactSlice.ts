import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Contact} from '../components/model';

type Contacts = {
    contacts: Contact[]
}

const initialState: Contacts = {
  contacts: [],
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: new Date().getTime(),
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      });
    },
    // toggleComplete(state, action: PayloadAction<string>) {
    //   const toggledTodo = state.list.find(todo => todo.id === action.payload);
    //   if (toggledTodo) {
    //     toggledTodo.completed = !toggledTodo.completed;
    //   }
    // },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;

//! add selectors into components in oder to pull the state form redux and also inser dispatch actions to change the state in redux store