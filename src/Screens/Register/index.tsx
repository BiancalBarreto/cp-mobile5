import { useContext, useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "./styles";
import { useDialog } from "@/hooks/useDialog";
import { AuthContext } from "@/Context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const { showDialog, Dialog } = useDialog();

  const doCreateUser = async () => {
    setError("");
    if (password !== confirmPassword) {
      showDialog("Alerta", "Senhas não conferem");
      return;
    }

    try {
      await createUser(email, password);
    } catch (error) {
      showDialog("Erro", "Algo de errado não está certo");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput label="Email" onChangeText={setEmail} />
      <TextInput label="Senha" secureTextEntry onChangeText={setPassword} />
      <TextInput
        label="Confirmar senha"
        secureTextEntry
        onChangeText={setConfirmPassword}
      />

      <Button style={styles.register} onPress={doCreateUser}>
        Cadastrar
      </Button>

      <Dialog />
    </View>
  );
};

export default Register;
