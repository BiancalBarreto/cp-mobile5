import { AuthContext } from "@/Context/AuthContext";
import { collection } from "@/database/unidade";
import { Unidade } from "@/types/unidade";
import * as firestore from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { List as PaperList } from "react-native-paper";

const List = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Unidade[]>();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    setIsLoading(true);
    const query = firestore.query(
      collection,
      firestore.where("accountId", "==", user?.uid)
    );
    const subscriber = firestore.onSnapshot(query, (snapshot) => {
      const result = snapshot.docs.map((item) => item.data() as Unidade);
      setData(result);
      setIsLoading(false);
    });
    return subscriber;
  }, [user]);

  return (
    <FlatList
      refreshing={isLoading}
      onRefresh={() => {}}
      data={data}
      renderItem={({ item }) => (
        <PaperList.Item
          title={item.name}
          onPress={(event) => console.log("hey")}
          right={() => <PaperList.Icon icon="chevron-right" />}
        />
      )}
    />
  );
};

export default List;
