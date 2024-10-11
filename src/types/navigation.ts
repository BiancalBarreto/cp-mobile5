import { NavigationProp, NavigatorScreenParams } from "@react-navigation/native";

type AuthStack = {
  Login: undefined;
  Register: undefined;
};


type UnidadeStackParamList = {
  List: undefined;
  Form: undefined;
};

type RootStackParamList = {
  HomeMain: undefined;
  UnidadeStack: NavigatorScreenParams<UnidadeStackParamList>
  // Aqui ficarão tambem as outras stacks ou telas para navegaçaõ
};

export type AuthNavigation = NavigationProp<AuthStack>;
export type UnidadeNavigationProp = NavigationProp<UnidadeStackParamList>;
export type RootNavigationProp = NavigationProp<RootStackParamList>;

export {
  AuthStack,
  UnidadeStackParamList,
  RootStackParamList,
};
