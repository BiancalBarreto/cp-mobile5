import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Index from "@/Screens";
import AppNavigator from "@/Navigation/AppNavigator";

const App = () => {
  return (
    <PaperProvider>
      <AppNavigator />;
    </PaperProvider>
  );
};

export default App;