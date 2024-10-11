import { auth } from "@/firebaseConfig";

export const getCurrentUser = () => {
  return auth.currentUser;
};
