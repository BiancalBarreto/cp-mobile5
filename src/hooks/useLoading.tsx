import { useState } from "react";
import { View } from "react-native";
import {
  Portal,
  Dialog as PaperDialog,
  ActivityIndicator,
  Modal,
} from "react-native-paper";

const useLoading = () => {
  const [visible, setVisible] = useState(false);

  const toggleLoading = () => {
    setVisible(!visible);
  };

  const LoadingModal = () => {
    return (
      <Portal>
        <Modal visible={visible} dismissable={false}>
          <ActivityIndicator />
        </Modal>
      </Portal>
    );
  };

  return {
    toggleLoading,
    LoadingModal,
  };
};

export { useLoading };
