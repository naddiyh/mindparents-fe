// import {doc,getDoc,updateDoc} from "firebase/firestore"
// import {auth,db} from "@/config/firebase"
// import { USER_NOT_FOUND } from "@/constant/error"

// export const getCurrentUser = async () =>{
//     const user = auth.getCurrentUser
//     if(!user) throw new Error ("user not found!")
//         const docRef = doc(db,"user",user.uid);
//     const docSnap = await getDoc(docRef)

//     if(!docSnap.exist((){
//         throw new Error(USER_NOT_FOUND)
//     }))

//     return docSnap.data() as IUser
// }
