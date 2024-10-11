import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack, UnidadeNavigation, UnidadeStack, HomeStack } from "@/types/navigation";
import HomePrincipal from "@/Screens/Home/HomeMain";


const Stack = createNativeStackNavigator<HomeStack>();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomePrincipal}/>
    </Stack.Navigator>
  );
};

export default Home;
