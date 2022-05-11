import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://afternoon-depths-73303.herokuapp.com/login",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("access-token", data.accessToken);
      }
    };
    getToken();
  }, [user]);

  return [token];
};

export default useToken;
