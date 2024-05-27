export type TRole = "user" | "admin" | "psikologi";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  role: TRole;
  photoURL: string | null;
  emailVerified: boolean;
  parentDob: string;
  childDob: string;
  topik: string;
  createdAt: string;
  updatedAt: string;
  password: string;
}
