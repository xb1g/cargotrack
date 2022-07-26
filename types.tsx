/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CargoItemProps } from "./src/screens/dashboard/CargoItem";
import { Module } from "./src/services/auth/AuthContext";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type AuthStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
};

export type DashboardStackParamList = {
  Dashboard: undefined;
  ModuleScreen: {
    module: Module;
  };
  CargoInfo: {
    route: RouteProp<
      { params: { id: string; item: CargoItemProps } },
      "params"
    >;
    navigation: any;
  };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabHistory: undefined;
  TabDashboard: undefined;
  TabUser: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
