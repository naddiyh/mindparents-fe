export type TRole = "user" | "admin" | "psikologi";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  role: TRole;
  photoURL: string | null;
  password: string;
  birth_of_parent: string;
  birth_of_child: string;
  createdAt: string;
  updatedAt: string;
}
