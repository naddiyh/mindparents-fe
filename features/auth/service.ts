import {
  User,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
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

import { FirebaseError } from "firebase/app";
Import {IUser,TRole} from "@/interface/user"
import { USER_NOT_FOUND } from "@/constant/error";