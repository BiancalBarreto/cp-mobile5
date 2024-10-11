import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Divider, Menu, Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList, UnidadeStackParamList } from '@/types/navigation';
import { getCurrentUser } from '@/Navigation/authUser';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

type HomeMainNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeMain'>;

const HomeMain = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigation = useNavigation<HomeMainNavigationProp>();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.email) {
      setUserEmail(currentUser.email);
    }
  }, []);

  const doSignOut = async () => {
    await signOut(auth);
  };

  const openUnidadeScreen = (screenName: keyof UnidadeStackParamList) => {
    closeMenu();
    navigation.navigate('UnidadeStack', { screen: screenName });
  };

  return (
    <View>
      <Text>Bem-vindo! {userEmail || 'Usuário'}</Text>
      <PaperProvider>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button onPress={openMenu}>Unidade</Button>}
          >
            <Menu.Item onPress={() => openUnidadeScreen('Form')} title="Nova Unidade" />
            <Divider />
            <Menu.Item onPress={() => openUnidadeScreen('List')} title="Listar Unidade" />
          </Menu>
          {/* <Button title="Sign out" onPress={doSignOut} /> */}
        </View>
      </PaperProvider>
    </View>
  );
};

export default HomeMain;