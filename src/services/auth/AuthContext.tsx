import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  UserInfo,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { loginRequest, logoutRequest, registerRequest } from "./AuthService";
import { doc } from "firebase/firestore";
import { db, auth } from "../../../firebaseConfig";

// import { auth } from "../../../firebase";
interface AuthContextInterface {
  user: User | null;
  // userInfo: UserInfo | null;
  onLogin: (email: string, password: string) => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string,
    userInfo: {
      username: string;
    }
  ) => void;
  onLogout: any;
  // onUpdateUserInfo: any;
}

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<any>(null);
  // const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("got user");
        console.log(user);
        // setUserInfo(user.providerData[0]);
      } else {
        console.log("no user");
        setUser(null);
        // setUserInfo(null);
      }
    });
  }, [user]);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        console.log(u);
        setUser(u.user);
        setError(null);
        setIsLoading(false);
      })
      .catch((e) => {
        // console.log(e, e.toString());
        // setError(e.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string,
    userInfo: {
      username: string;
    }
  ) => {
    setIsLoading(true);
    console.log("PASS", password, repeatedPassword);
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    registerRequest(email, password).then((u) => {
      console.log(u);
      const newUser = { ...u.user, userInfo };
      const uid = newUser.uid;
      setUser(newUser);
      setError(null);
      const docRef = doc(db, "users", uid);
      const payload = {
        email,
        ...userInfo,
      };
    });
    console.log(auth);
  };

  const onLogout = () => {
    logoutRequest();
  };

  return (
    <AuthContext.Provider value={{ user, onLogin, onRegister, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
