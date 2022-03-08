import React, { createContext, useState } from "react";

interface AuthContextInterface {
  user: any;
  userInfo: any;
  onLogin: any;
  onRegister: any;
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
  const [userInfo, setUserInfo] = useState(null);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    setUser("bank");
    // loginRequest(email, password)
    //   .then((u) => {
    //     // // console.log(u);
    //     setUser(u);
    //     setError(null);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     // console.log(e, e.toString());
    //     // setError(e.toString());
    //     setIsLoading(false);
    //   });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string,
    userInfo: string
  ) => {
    setIsLoading(true);
    // console.log("PASS", password, repeatedPassword);
    // if (password !== repeatedPassword) {
    //   setError("Passwords do not match");
    //   return;
    // }
    // registerRequest(email, password)
    //   .then((u) => {
    //     u.displayName = userInfo.username;
    //     const newUser = { ...u.user, userInfo };
    //     const uid = newUser.uid;
    //     setUser(newUser);
    //     setError(null);
    //     const docRef = doc(db, "users", uid);
    //     const payload = {
    //       email,
    //       ...userInfo,
    //     };

    //     setDoc(docRef, payload)
    //       .then(() => {
    //         // console.log("successssssssssssssssssssss!!!");
    //         setIsLoading(false);
    //       })
    //       .catch((e) => {
    //         // console.log("ERROR FUCKER", e);
    //         setIsLoading(false);
    //         // setError(e.toString());
    //       });
    //     const mapDataRef = doc(db, "users", uid, "maps", "sets");
    //     const mapDataPayload = {
    //       isStarted: false,
    //       progress: 0,
    //       modulesCount: 8,
    //     };
    //     setDoc(mapDataRef, mapDataPayload)
    //       .then(() => {
    //         // console.log("success to add modules!!!");
    //         setIsLoading(false);
    //       })
    //       .catch((e) => {
    //         // console.log("can't create modules", e);
    //         setIsLoading(false);
    //         // setError(e.toString());
    //       });
    //     initial_data.forEach((module) => {
    //       const moduleRef = doc(
    //         db,
    //         "users",
    //         uid,
    //         "maps",
    //         "sets",
    //         "modules",
    //         module.name
    //       );
    //       const modulePayload = module;
    //       setDoc(moduleRef, modulePayload)
    //         .then(() => {
    //           // console.log(module);
    //           setIsLoading(false);
    //         })
    //         .catch((e) => {
    //           // console.log("can't create modules", e);
    //           setIsLoading(false);
    //           // setError(e.toString());
    //         });
    //       const settingRef = doc(db, "users", uid, "settings", "common");
    //       const settingPayload = {
    //         audio: { master: 100, music: 100, sfx: 100, voice: 100 },
    //         notification: {
    //           community_message: true,
    //           questions: true,
    //           answers: true,
    //           remind_me: true,
    //           do_not_disturb: false,
    //         },
    //         fav_badges: [],
    //       };
    //       setDoc(settingRef, settingPayload)
    //         .then(() => {
    //           // console.log("success to add settings!!!");
    //           setIsLoading(false);
    //         })
    //         .catch((e) => {
    //           // console.log("can't set up", e);
    //           setIsLoading(false);
    //           // setError(e.toString());
    //         });
    //     });
    //   })
    //   .catch((e) => {
    //     // console.log("ERROR CATCHING", e);
    //     setError(e.toString());
    //     // console.log(error);
    //     setIsLoading(false);
    //   });
  };

  const onLogout = () => {
    setUser(null);
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
