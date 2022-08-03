import { View, Text } from "react-native";
import React, { createContext, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import {
  getUserDataServer,
  linkModuleServer,
  loginServer,
  registerServer,
} from "./AuthService";
import { saveModuleServer, triggerModuleServer } from "../requests/modules";

export type Module = {
  _id: string;
  id: string;
  name: string;
  status: string;
  data: any;
  dataHistory: any;
};

export type Data = {
  data: [
    {
      temp: number;
      humidity: number;
      timestamp: Date;
      location: {
        lat: number;
        lng: number;
      };
    }
  ];
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

  linkModule: (id: string) => Promise<any>;
  saveModule: (module: Module) => Promise<any>;
  triggerModule: (id: string) => Promise<any>;
  stopModule: (id: string) => Promise<any>;
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
        //get user from server
        getUserDataServer(userData)
          .then((res) => {
            // let data = [];
            // res.modules.map((mod: Module) => {
            //   if (mod.status == "active") {
            //     let dataId = mod.data;
            //     const data = await getDeliveryData(dataId);
            //     mod.data = data;
            //   }
            // });
            setUser(res);
          })
          .catch((err) => {
            console.error(err);
          });

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
    console.log("logout");
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

  async function linkModule(id: string) {
    setLoading(true);

    if (!user?._id || !id) {
      console.log("no user id");
      setLoading(false);
      return;
    }

    return linkModuleServer(id, user._id)
      .then((res) => {
        setUser(res);
        console.log(res);
        return res;
      })
      .catch((error) => {
        setError(error);
        console.error('e linl",', error);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function saveModule(module: Module) {
    setLoading(true);

    if (!user?._id || !module?._id) {
      console.log("no user id");
      setLoading(false);
      return;
    }

    saveModuleServer(module)
      .then((res: Module) => {
        const newModules: Module[] = user.modules.map((m) => {
          if (m._id === module._id) {
            return res;
          }
          return m;
        });

        setUser({ ...user, modules: newModules });

        console.log(res);
        return res;
      })
      .catch((error) => {
        setError(error);
        console.error('e linl",', error);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function triggerModule(id: string) {
    setLoading(true);

    if (!user?._id || !id) {
      console.log("no user id");
      setLoading(false);
      return;
    }

    return triggerModuleServer(id)
      .then((res) => {
        const newModules: Module[] = user.modules.map((m) => {
          if (m._id === res._id) {
            return res;
          }
          return m;
        });

        setUser({ ...user, modules: newModules });

        console.log(res);
        return res;
      })
      .catch((error) => {
        setError(error);
        console.error('e linl",', error);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function stopModule(id: string) {
    setLoading(true);

    if (!user?._id || !id) {
      console.log("no user id");
      setLoading(false);
      return;
    }

    return triggerModuleServer(id, true)
      .then((res) => {
        const newModules: Module[] = user.modules.map((m) => {
          if (m._id === res._id) {
            return res;
          }
          return m;
        });

        setUser({ ...user, modules: newModules });

        console.log(res);
        return res;
      })
      .catch((error) => {
        setError(error);
        console.error('e linl",', error);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        error,
        linkModule,
        saveModule,
        triggerModule,
        stopModule,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
