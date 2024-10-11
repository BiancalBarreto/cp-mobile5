import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigation } from "@/types";
import { styles } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<AuthNavigation>();

  const doAuth = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {}
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <TextInput label="Email" onChangeText={setEmail} />
      <TextInput label="Senha" secureTextEntry onChangeText={setPassword} />

      <Button style={styles.login} mode="contained" onPress={doAuth}>
        Login
      </Button>
      <Button style={styles.register} onPress={goToRegister}>
        Não tem cadastro? Clique aqui
      </Button>
    </View>
  );
};

export default Login;
