import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider";
import { router } from "expo-router";
import { getData, getValueFor, save, saveData } from "../../utils/storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [jwtToken, setJwtToken] = useState<string | undefined>();
  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setJwtToken("dfdfdfd");
    setUser({ username, email: "" });
    await save("token", "dfdfdfd");
    await saveData("userInfo", { username, email: "" });
    setIsLoading(false);
    router.replace("/home");
  };

  const signin = (username: string, password: string) => {
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    setUser({ username, email: "" });
    alert("Signin successful");
    router.replace("/home");
  };

  const logout = async () => {
    setIsLoading(true);
    setJwtToken(undefined);
    setUser(undefined);
    await save("token", "");
    await saveData("userInfo", "");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await getValueFor("token");
      let userInfo = await getData("userInfo");
      // console.log(userToken, ":", userInfo);
      if (!userToken?.length || !userInfo?.length) {
        setIsLoading(false);
        return;
      }
      setUser(userInfo);
      setJwtToken(userToken);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log("error: ", e);
    }
  };
  useEffect(() => {
    isLoggedIn();
  });
  return {
    user,
    login,
    signin,
    logout,
    isLoading,
  };
};

export default useAuth;
