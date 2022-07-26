import { View, Text } from "react-native";
import React, { createContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { linkModuleServer, loginServer, registerServer } from "./AuthService";

export type Module = {
  _id: string;
  id: string;
  name: string;
  status: string;
  data: any;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  modules: Module[];
};

type AuthContextInterface = {
  user: User | undefined;
  loading: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string, name: string) => void;
  linkModule: (id: string) => void;
  error: string | undefined;
};

export const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | undefined>();
  const [user, setUser] = React.useState<User>();

  // get userData from secure store
  useEffect(() => {
    console.log("gettig user from secure store");

    setUser(undefined);
    (async () => {
      const userData = await getValueFor("user");
      console.log(userData, "UDA");
      if (userData) {
        setUser(JSON.parse(userData));
        console.log("ud", userData);
      }
    })();
  }, []);

  function login(email: string, password: string) {
    setLoading(true);
    loginServer(email, password)
      .then((user) => {
        setUser(user);
        save(
          "user",
          JSON.stringify({
            email: user.email,
            _id: user._id,
          })
        );
      })
      .catch((error) => {
        console.log("eeee", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function logout() {
    setUser(undefined);
    save("user", "");
  }

  function register(email: string, password: string, name: string) {
    setLoading(true);
    registerServer(email, password, name)
      .then((user) => {
        setUser(user);
        save(
          "user",
          JSON.stringify({
            email: user.email,
            _id: user._id,
          })
        );
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function linkModule(id: string) {
    setLoading(true);
    if (!user._id) {
      console.log("no user id");
      setLoading(false);
      return;
    }

    linkModuleServer(id, user._id)
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, register, error, linkModule }}
    >
      {children}
    </AuthContext.Provider>
  );
};
