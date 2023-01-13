import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Contact} from '../components/model';

type Contacts = {
    contacts: Contact[]
}

const initialState: Contacts = {
  contacts: [],
}

const editContactFunc = (contactToEdit:any, editInfo:any) => {
if (contactToEdit.id === editInfo.id) {
  contactToEdit.name = editInfo.name;
  contactToEdit.phoneNumber = editInfo.phoneNumber;
}
 
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
        editContact(state,action) {
          console.log(action.payload)
          state.contacts.map(contact => contact.id == action.payload.id ? editContactFunc(contact,action.payload) : contact  );
            // state.contacts.map(contact => contact.id == action.payload.id ? contact : editContactFunc(contact,action.payload)  );
            // // const index = state.contacts.findIndex(contact => contact.id == action.payload.id);
            // //fucking no idea
        },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;

//! add selectors into components in oder to pull the state form redux and also inser dispatch actions to change the state in redux store