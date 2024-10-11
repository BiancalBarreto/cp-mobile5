import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import * as firebaseAuth from "firebase/auth";

import { auth } from "@/firebaseConfig";
import { AuthContextProps } from "@/types/context";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<firebaseAuth.User | null>();

  const authentication = async (email: string, password: string) => {
    firebaseAuth.signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = async (email: string, password: string) => {
    await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
  };

  const signOut = async () => {
    await firebaseAuth.signOut(auth);
  };

  useEffect(() => {
    const subscriber = firebaseAuth.onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ user, authentication, createUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
