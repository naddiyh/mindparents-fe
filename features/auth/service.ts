import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "@/config/firebase";
import { TLoginForm, TSingUpForm } from "./types";
import { IUser, TRole } from "@/interface/user";
import { USER_NOT_FOUND } from "@/constant/error";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";

export const useAuthState = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const auth = getAuth();
  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "user", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data() as IUser;
          setUser(userData);
        }
      } else {
        setUser(null);
      }
    });

    return () => unregisterAuthObserver();
  }, []);

  return user;
};

export const signup = async (value: TSingUpForm) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    value.email,
    value.password,
  );

  const user: IUser = {
    uid: userCredential.user.uid,
    name: value.name,
    email: value.email,
    role: "user",
    photoURL: userCredential.user.photoURL,
    emailVerified: userCredential.user.emailVerified,
    parentDob: value.parentDob,
    childDob: value.childDob,
    topik: value.topik,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    password: value.password,
  };

  await setDoc(doc(db, "user", user.uid), user);
  return user;
};

export const login = async (value: TLoginForm, role: TRole = "user") => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    value.email,
    value.password,
  );

  const docRef = doc(db, "user", userCredential.user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    signOut(auth);
    throw new FirebaseError("user not found", USER_NOT_FOUND);
  }

  if (role !== "user" && docSnap.data()?.role === "user") {
    signOut(auth);
    throw new FirebaseError("operation-not-allowed", "Operation not allowed");
  }

  const user = docSnap.data() as IUser;
  user.emailVerified = userCredential.user.emailVerified;
  return user;
};

export const logout = async () => {
  await signOut(auth);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const docRef = doc(db, "user", userCredential.user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const user: IUser = {
      uid: userCredential.user.uid,
      name: userCredential.user.displayName?.split(" ")[0] || "",
      email: userCredential.user.email || "",
      photoURL: userCredential.user.photoURL || "",
      emailVerified: userCredential.user.emailVerified,
      role: "user",
      password: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      parentDob: "",
      childDob: "",
      topik: "",
    };
    await setDoc(doc(db, "user", user.uid), user);
    return user;
  }

  const user = docSnap.data() as IUser;
  user.emailVerified = userCredential.user.emailVerified;
  return user;
};

export const checkAccountExist = async (email: string) => {
  const user = query(collection(db, "user"), where("email", "==", email));

  const querySnapshot = await getDocs(user);
  return querySnapshot.docs.length > 0;
};
