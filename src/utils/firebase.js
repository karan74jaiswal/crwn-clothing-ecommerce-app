import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
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
  const user = await getRedirectResult(auth);
  return user;
};

// Creating Documents
const addUser = async (userAuthData, additionalData) => {
  if (!userAuthData) return;
  const userData = {
    displayName: userAuthData.displayName,
    email: userAuthData.email,
    uid: userAuthData.uid,
    phoneNumber: userAuthData.phoneNumber,
    photo: userAuthData.photoURL,
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

// Getting a single Document Data
const getUserData = async function (userAuthData) {
  const collectionRef = collection(db, "users");
  const documentReference = doc(collectionRef, userAuthData.uid);
  let documentSnapshot = await getDoc(documentReference);
  if (!documentSnapshot.exists()) {
    await addUser(userAuthData);
    documentSnapshot = await getDoc(documentReference);
  }
  await setDoc(documentReference, { lastLogin: new Date() }, { merge: true });
  return documentSnapshot.data();
};

const emailSignup = async (email, password) => {
  const newUser = await createUserWithEmailAndPassword(auth, email, password);
  return newUser;
};

const emailSignIn = async function (email, password) {
  const userAuth = await signInWithEmailAndPassword(auth, email, password);
  return userAuth;
};

const authStateChangeListener = (observerCallback) =>
  onAuthStateChanged(auth, observerCallback);

// Only be using for single time. Generally its not done this frontend way.
const addCollectionAndDocuments = async (collectionName, objects) => {
  if (!collectionName || !document) return;
  try {
    const batch = writeBatch(db);
    const collectionRef = collection(db, collectionName);
    objects.forEach((object) => {
      const documentRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(documentRef, object);
    });
    await batch.commit();
  } catch (err) {
    console.log(err.message);
  }
};

const getCategoriesAndDocuments = async function (collectionName) {
  const collectionRef = collection(db, collectionName);
  const querySnapShot = await getDocs(collectionRef);

  const categoryMap = querySnapShot.docs.reduce((acc, doc) => {
    const { items } = doc.data();
    acc[doc.id] = items;
    return acc;
  }, {});
  return categoryMap;
};

const signUserOut = async () => await signOut(auth);

export {
  auth,
  signInWithGoogle,
  signOut,
  addUser,
  getUserData,
  getRedirectAuthResult,
  emailSignup,
  emailSignIn,
  authStateChangeListener,
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
  signUserOut,
};
