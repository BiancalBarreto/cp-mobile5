import { NavigationProp } from "@react-navigation/native";

type AuthStack = {
  Login: undefined;
  Register: undefined;
};


type AuthNavigation = NavigationProp<AuthStack>;

type UnidadeStack = {
  List: undefined;
  Form: undefined;
};

type MainStack = {
  
};

type HomeStack = {
  HomeMain: undefined;
}

type UnidadeNavigation = NavigationProp<UnidadeStack>;

export { AuthStack, AuthNavigation, UnidadeStack, UnidadeNavigation, HomeStack };
