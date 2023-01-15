import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

// would convert firebaseConfig to .env in actual real-world project
const firebaseConfig = {
  apiKey: "AIzaSyCCTkD3w6-zaFp6M7vIEAtXBl5nvVEp9BY",
  authDomain: "contact-app-ed46b.firebaseapp.com",
  projectId: "contact-app-ed46b",
  storageBucket: "contact-app-ed46b.appspot.com",
  messagingSenderId: "652381401839",
  appId: "1:652381401839:web:3e7fc342826fa24638a11a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);