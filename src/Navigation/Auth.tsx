import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "@/Screens/Login";
import Register from "@/Screens/Register";
import { AuthStack } from "@/types/navigation";

const Stack = createNativeStackNavigator<AuthStack>();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Auth;
