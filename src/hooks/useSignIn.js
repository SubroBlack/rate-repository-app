import {useContext} from "react";
import {SIGNIN} from "../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import AuthStorageContext from "../context/AuthStorageContext";

const useSignIn = () => {
  const [login, result] = useMutation(SIGNIN, {
    onError: (error) => {
      console.log("Woops: ", error);
    }
  });

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
      console.log("SignIn credentials: ", username, password);
      const {data} = await login({variables: {username: username, password: password}});
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
      return {data};
    };

    return [signIn, result];
  };

export default useSignIn;