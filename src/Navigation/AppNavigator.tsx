import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigation';
import HomeMain from '@/Screens/Home/HomeMain';
import UnidadeNavigator from '@/Navigation/UnidadeNavigator';
// Importe outros navegadores ou telas aqui se necessário

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeMain">
        <Stack.Screen
          name="HomeMain"
          component={HomeMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UnidadeStack"
          component={UnidadeNavigator}
          options={{ headerShown: false }}
        />
        {/* Adicione outras stacks ou telas aqui */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
