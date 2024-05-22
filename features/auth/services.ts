// services/userService.ts
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { TSingUpForm } from "./types";
import { IUser } from "@/interface/user";

export const signup = async (values: TSingUpForm) => {
  const { email, password, name, birth_of_parent, birth_of_child } = values;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );
  const user = userCredential.user;

  const userDoc: IUser = {
    uid: user.uid,
    name,
    email,
    role: "user",
    photoURL: user.photoURL || null,
    password: "", // Do not store password in Firestore
    birth_of_parent,
    birth_of_child,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await setDoc(doc(db, "users", user.uid), userDoc);
};
