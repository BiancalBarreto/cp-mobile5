import { useContext } from "react";
import Auth from "@/Navigation/Auth";
import Home from "@/Navigation/AppNavigator";
import { AuthContext } from "@/Context/AuthContext";

const Index = () => {
  const { user } = useContext(AuthContext);
  return user !== null ? <Home /> : <Auth />;
};

export default Index;
