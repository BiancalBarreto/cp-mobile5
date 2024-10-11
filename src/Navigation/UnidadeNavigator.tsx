import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UnidadeStackParamList } from '@/types/navigation';
import Form from '@/Screens/Unidade/Form';
import List from '@/Screens/Unidade/List'; 

const Stack = createNativeStackNavigator<UnidadeStackParamList>();

const UnidadeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Form">
      <Stack.Screen name="Form" component={Form} options={{ title: 'Nova Unidade' }} />
      <Stack.Screen name="List" component={List} options={{ title: 'Listar Unidades' }} />
    </Stack.Navigator>
  );
};

export default UnidadeNavigator;