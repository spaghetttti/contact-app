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
  contactToEdit.email = editInfo.email;
  contactToEdit.tag = editInfo.tag;
  //? contactToEdit = editInfo
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
        email: action.payload.email,
        tag: action.payload.tag
      });
    },
        editContact(state,action) {
          console.log(action.payload)
          state.contacts.map(contact => contact.id == action.payload.id ? editContactFunc(contact,action.payload) : contact  );
        },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    }
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
