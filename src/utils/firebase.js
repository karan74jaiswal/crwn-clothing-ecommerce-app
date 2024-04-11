import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwvvWmLt-KTYL5PrdURary5e-f_OanmpM",
  authDomain: "crwn-clothing-backend-688a3.firebaseapp.com",
  projectId: "crwn-clothing-backend-688a3",
  storageBucket: "crwn-clothing-backend-688a3.appspot.com",
  messagingSenderId: "359088065774",
  appId: "1:359088065774:web:427880d53d1d28ea26f7ff",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Auth Service
const auth = getAuth(firebaseApp);

// Initialize FireStore Database Service
const db = getFirestore(firebaseApp);

// Creating a Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setDefaultLanguage("en");
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Telling Google Provider, How will it behave
const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Creating Documents
const addUser = async (userAuthData) => {
  const userData = {
    displayName: userAuthData.user.displayName,
    firstName: userAuthData.user.displayName.split(" ")[0],
    lastName: userAuthData.user.displayName.split(" ")[1],
    email: userAuthData.user.email,
    uid: userAuthData.user.uid,
    phoneNumber: userAuthData.user.phoneNumber,
    photo: userAuthData.user.photoURL,
    provider: userAuthData.providerId,
    createdAt: new Date(),
  };
  const collectionRef = collection(db, "users");
  try {
    await setDoc(doc(collectionRef, userData.uid), userData);
  } catch (err) {
    console.warn(console.error("Error adding document: ", err));
  }
};

// Getting all documents reference from a collection 'users' and their data at once
const getAllUsersData = async () => {
  const users = await getDocs(collection(db, "users"));
  console.log(users);
};

// Getting a single Document Data
const getUserData = async function (userAuthData) {
  const collectionRef = collection(db, "users");
  const documentReference = doc(collectionRef, userAuthData.user.uid);
  const documentSnapshot = await getDoc(documentReference);
  if (!documentSnapshot.exists()) {
    await addUser(userAuthData);
    return (await getDoc(documentReference)).data();
  }
  return documentSnapshot.data();
};

export {
  auth,
  signInWithGoogle,
  signOut,
  addUser,
  getAllUsersData,
  getUserData,
};
