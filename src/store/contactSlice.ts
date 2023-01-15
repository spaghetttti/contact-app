import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "../components/model";
import axios from "axios";

const baseURL = "https://contact-app-ed46b-default-rtdb.firebaseio.com/contacts";
const fakeURL = "https://jsonplaceholder.typicode.com/posts"

const instance = axios.create({ baseURL:  "https://contact-app-ed46b-default-rtdb.firebaseio.com"})

export const fetchContacts = createAsyncThunk('/posts/', async () => {
  try {
    const response = await axios.get(fakeURL)
    console.log(response.data);
    instance.get("/contacts.json").then(res => console.log(res.data));
    return [...response.data];

  } catch (error: any) {
    return error.message;
  }
});

let fetchedResults: any;
async function fetchContacts1 () {
  const res = await instance.get("/contacts.json");
  fetchedResults = [];
  for (let key in res.data) {
        fetchedResults.push({
          ...res.data[key],
          id: key,
        });
}
return fetchedResults;
}

// let fetchedContacts = await fetchContacts1();
// console.log(fetchedContacts);

// let fetchedContacts : any[];
// fetchedContacts = [];
const test = fetchContacts1().then(value => { return value})
// // fetchedContacts.then(value => console.log(value))
// console.log(fetchedContacts);

console.log(test);

fetchContacts();

// instance.get("/contacts.json").then((res) => {
//     console.log(res.data)
// });

type Contacts = {
  contacts: Contact[];
};

const initialState: Contacts = {
  contacts: [{
    id: 'sdf',
    name: 'initial name',
    phoneNumber: 101010,
    email: "initialEmail@gmail.com",
    tag: "work"
  }],
  
};


// let fetchedResults: any;
// URL.get("/contacts.json").then((res) => {
//   console.log(res.data)
//   fetchedResults = [];
//   for (let key in res.data) {
//     console.log(key, res.data[key], fetchedResults)
//     fetchedResults.push({
//       ...res.data[key],
//       id: key,
//     });
    
//   }
// });


// URL.get("/contacts.json").then( (res) => {
  
// })

// axios.get("/db.json").then(res => console.log(res.data)).catch(err => console.log(err))
// const json = JSON.stringify({ answer: 42 });
// axios.post("/db.json", json,{
//   headers: {
//     // Overwrite Axios's automatically set Content-Type
//     'Content-Type': 'application/json'
//   }
// })
// // console.log(axiosData, Object.values(axiosData));
 

const editContactFunc = (contactToEdit: any, editInfo: any) => {
  if (contactToEdit.id === editInfo.id) {
    contactToEdit.name = editInfo.name;
    contactToEdit.phoneNumber = editInfo.phoneNumber;
    contactToEdit.email = editInfo.email;
    contactToEdit.tag = editInfo.tag;
    //? contactToEdit = editInfo
  }
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push({
        id: new Date().getTime(),
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
        email: action.payload.email,
        tag: action.payload.tag,
      });
    },
    editContact(state, action) {
      console.log(action.payload);
      state.contacts.map((contact) =>
        contact.id === action.payload.id
          ? editContactFunc(contact, action.payload)
          : contact
      );
    },
    removeContact(state, action: PayloadAction<number | string>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, editContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
