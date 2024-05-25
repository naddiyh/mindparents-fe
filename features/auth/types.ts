import { TRole } from "@/interface/user";

export type TLoginForm = {
  email: string;
  password: string;
  role?: TRole;
};

export type TSingUpForm = {
  email: string;
  password: string;
  name: string;
  parentDob: string;
  childDob: string;
  topik: string;
};

export type TForgotPassword = {
  email: string;
};
