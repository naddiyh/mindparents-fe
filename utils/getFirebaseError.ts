import * as ERROR_MESSAGES from "@/constant/error";

export const getFirebaseErrorMessage = (code: string) => {
  switch (code) {
    case "user-not-found":
      return ERROR_MESSAGES.USER_NOT_FOUND;
    case "auth/email-already-in-use":
      return ERROR_MESSAGES.EMAIL_ALREADY_EXIST;
    case "auth/internal-error":
      return ERROR_MESSAGES.INTERNAL_ERROR;
    case "auth/invalid-login-credentials":
      return ERROR_MESSAGES.INVALID_CREDENTIAL;
    case "auth/operation-not-allowed":
      return ERROR_MESSAGES.OPERATION_NOT_ALLOWED;
    default:
      return code;
  }
};
