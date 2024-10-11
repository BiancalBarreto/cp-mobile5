import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Index from "@/Screens";

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;