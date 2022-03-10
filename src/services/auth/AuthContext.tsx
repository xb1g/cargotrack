import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { loginRequest, registerRequest } from "./AuthService";
import { doc } from "firebase/firestore";
import { db, auth } from "../../../firebaseConfig";

// import { auth } from "../../../firebase";
interface AuthContextInterface {
  user: any;
  userInfo: any;
  onLogin: any;
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
export const AuthContext = createContext<AuthContextInterface>({
  user: null,
  userInfo: null,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
  // onUpdateUserInfo: () => {},
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [userInfo, setUserInfo] = useState(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        // // console.log(u);
        setUser(u);
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
  };

  const onLogout = () => {
    // setUser(null);
    // logoutRequest();
  };

  return (
    <AuthContext.Provider
      value={{ user, userInfo, onLogin, onRegister, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
