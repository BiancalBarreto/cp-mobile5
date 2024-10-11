import { useContext, useEffect, useState } from "react";
import { UnidadeNavigation } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import { AuthContext } from "@/Context/AuthContext";
import { collection } from "@/database/unidade";
import { addDoc } from "firebase/firestore";
import { useLoading } from "@/hooks/useLoading";
import { Unidade } from "@/types/unidade";

type FormHeaderRightProps = {
  onConfirm: () => void;
};

const FormHeaderRight = ({ onConfirm }: FormHeaderRightProps) => {
  return <IconButton icon="check-bold" onPress={onConfirm} />;
};

const Form = () => {
  const [unidade, setUnidade] = useState<Unidade>({} as Unidade);
  const navigation = useNavigation<UnidadeNavigation>();

  const { user } = useContext(AuthContext);
  const { toggleLoading, LoadingModal } = useLoading();

  const save = async () => {
    toggleLoading();
    await addDoc(collection, { ...unidade, accountId: user?.uid });
    navigation.goBack();
    toggleLoading();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <FormHeaderRight onConfirm={save} />,
    });
  }, [navigation, save]);

  const handleInputChange = (field: keyof Unidade) => {
    return (text: string) => {
      setUnidade((previous) => ({ ...previous, [field]: text }));
    };
  };

  return (
    <ScrollView contentContainerStyle={{ rowGap: 10 }}>
      <TextInput label="Nome" onChangeText={handleInputChange("name")} />
      <TextInput label="CEP" onChangeText={handleInputChange("zipcode")} />
      <TextInput
        label="Logradouro"
        onChangeText={handleInputChange("streetName")}
      />
      <TextInput label="Número" onChangeText={handleInputChange("number")} />
      <TextInput
        label="Complemento"
        onChangeText={handleInputChange("complement")}
      />
      <TextInput label="Cidade" onChangeText={handleInputChange("city")} />
      <TextInput label="Estado" onChangeText={handleInputChange("state")} />
      <LoadingModal />
    </ScrollView>
  );
};

export default Form;