import { getCurrentUser } from "@/Navigation/authUser";
import { auth } from "@/firebaseConfig";
import { UnidadeNavigation } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, Divider, Menu, PaperProvider } from "react-native-paper";





const HomeMain = () => {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const navigation = useNavigation<UnidadeNavigation>();
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

    const goToForm = () => {
        navigation.navigate("Form");
    };


    return (
        <View>
            <Text>Bem vindo! {userEmail || "Usuário"}</Text>
            <PaperProvider>
                <View style={{
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>

                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu}>Unidade</Button>}>
                        <Menu.Item onPress={goToForm} title="Nova Unidade" />
                        <Divider />
                        <Menu.Item onPress={() => { }} title="Listar Unidade" />
                    </Menu>
                    {/* <Button title="Sign out" onPress={doSignOut} /> */}
                </View>
            </PaperProvider>

        </View>
    )

}

export default HomeMain;