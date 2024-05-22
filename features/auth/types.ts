import { TRole } from "@/interface/user";

export type TLoginForm = {
  email: string;
  passwrod: string;
  role?: TRole;
};

export type TSingUpForm = {
  email: string;
  password: string;
  name: string;
  birth_of_parent: string;
  birth_of_child: string;
};

export type TForgotPassword = {
  email: string;
};
