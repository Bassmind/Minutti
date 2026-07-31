// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, addDoc, setDoc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbpale21dWZqgjW8kLEuybnnk7PE6Thuc",
  authDomain: "minutti-d51fa.firebaseapp.com",
  projectId: "minutti-d51fa",
  storageBucket: "minutti-d51fa.firebasestorage.app",
  messagingSenderId: "495281828942",
  appId: "1:495281828942:web:22a996d97276b841abff1f",
  measurementId: "G-DD2QBDKN89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Get all properties
export async function allData() {
  const querySnapshot = await getDocs(collection(db, "properties"));
  
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

//Add new property
export async function addPropertyAndUpdate(property, precio) {
  const newProperty = {
    property: property,
    precio: precio
  };

  try {
    await addDoc(collection(db, "properties"), newProperty);

    return await allData(); // Return the updated list of properties after adding the new one
  }
  catch (e) {
    console.error("Error adding document: ", e);
  }
}

//Eliminar property
export async function deleteProperty(id) {
  try {
    await deleteDoc(doc(db, "properties", id));

    return await allData(); // Devuelve la lista actualizada
  }
  catch (e) {
    console.error("Error deleting document:", e);
    throw e;
  }
}