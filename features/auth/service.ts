// import {
//   User,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut,
// } from "firebase/auth";
// import {
//     doc,
//     setDoc,
//     getDoc,
//     getDocs,
//     collection,
//     query,
//     where,
// } from "firebase/firestore";
// import { auth, db } from "@/config/firebase";

// import { FirebaseError } from "firebase/app";

// import { USER_NOT_FOUND } from "@/constant/error";

// import {IUser,TRole} from "@/interface/user"
// import { TLoginForm,TSingUpForm } from "./types";

// export const signup = async (values:TSingUpForm) =>{

//     const user : IUser = {
//         uid: "",
//         name: values.name,
//         email: values.email,
//         role: "user",
//         photoURL: null,
//         password: "",
//         birth_of_parent: "",
//         birth_of_child: "",
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString

//     }
//     await setDoc (doc(db,"user",user.uid),user)
// }
