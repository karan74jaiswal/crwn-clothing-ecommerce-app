import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

// Telling Google Provider, How will it behave --- SignIn with Popup
// const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Signing in with Redirect
const signInWithGoogle = () => signInWithRedirect(auth, googleProvider);
const getRedirectAuthResult = async function () {
  const result = await getRedirectResult(auth);
  return result;
};
// Creating Documents
const addUser = async (userAuthData, additionalData) => {
  if (!userAuthData) return;
  const userData = {
    displayName: userAuthData.user.displayName,
    email: userAuthData.user.email,
    uid: userAuthData.user.uid,
    phoneNumber: userAuthData.user.phoneNumber,
    photo: userAuthData.user.photoURL,
    provider: userAuthData.providerId,
    createdAt: new Date(),
    ...additionalData,
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
  let documentSnapshot = await getDoc(documentReference);
  if (!documentSnapshot.exists()) {
    await addUser(userAuthData);
    documentSnapshot = await getDoc(documentReference);
  }
  await setDoc(documentReference, { lastLogin: new Date() }, { merge: true });
  return documentSnapshot.data();
};

const emailSignup = async (email, password, additionalData) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password);
  await addUser(newUser, additionalData);
};

const emailSignIn = async function (email, password) {
  const userAuth = await signInWithEmailAndPassword(auth, email, password);
  return userAuth;
};

export {
  auth,
  signInWithGoogle,
  signOut,
  addUser,
  getAllUsersData,
  getUserData,
  getRedirectAuthResult,
  emailSignup,
  emailSignIn,
};
