
import React, { createContext, useContext, useEffect, useState } from "react";

interface CargoesContextInterface {
  cargoes: CargoType[];
}

type CargoesContextProviderProps = {
  children: React.ReactNode;
};

export type CargoType = {
  type: string;
  plate: string;
  weight?: number;
  temperature?: number;
  humidity?: number;
  status?: string;
  location?: any;
};

type CargoesIdsType = string[];

export const CargoesContext = createContext<CargoesContextInterface>(
  {} as CargoesContextInterface
);

export const CargoesContextProvider = ({
  children,
}: CargoesContextProviderProps) => {
  const { user } = useContext(AuthContext);
  const [cargoes, setCargoes] = useState<CargoType[]>([]);
  const [cargoesIds, setCargoesIds] = useState<CargoesIdsType>([]);

  useEffect(() => {
    if (user) {
      const userRef = collection(db, "users", user.uid, "cargoes");
      const q = query(userRef);
      onSnapshot(userRef, (snapshot) => {
        console.log("object");
        // console.log(snapshot);
        const ids: string[] = [];
        const cargoesTem: { type: string; plate: string }[] = snapshot.docs.map(
          (doc) => {
            ids.push(doc.id);
            return {
              type: doc.data().type,
              plate: doc.data().plate,
            };
          }
        );
        console.log(ids);
        setCargoesIds(ids);
      });
    }
  }, [user]);

  useEffect(() => {
    console.log("here");
    let cargoesData: CargoType[] = [];
    cargoesIds.forEach((id) => {
      // every doc = cargo = 1 snapshot
      const cargoRef = doc(db, "cargoes", id);
      // snap for every cargo
      onSnapshot(cargoRef, (snapshot) => {
        const cargo = snapshot.data();
        if (cargo && cargo.status != "finished" && cargo.status) {
          const cargoData = {
            type: cargo.type,
            plate: cargo.plate,
            weight: cargo.weight,
            temperature: cargo.temperature,
            humidity: cargo.humidity,
            location: cargo.location,
            status: cargo.status,
          };
          cargoesData.push(cargoData);
        } else console.log("no data");
      });
    });
    console.log("there");
    setCargoes(cargoesData);
  }, [cargoesIds]);

  useEffect(() => {
    console.log("cg");
    console.log(cargoes);
  }, [cargoes]);

  return (
    <CargoesContext.Provider value={{ cargoes }}>
      {children}
    </CargoesContext.Provider>
  );
};
