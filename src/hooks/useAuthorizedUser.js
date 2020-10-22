import {AUTHORIZED_USER} from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const useAuthorizedUser = () => {
  const {data, error, loading} = useQuery(AUTHORIZED_USER, {
      fetchPolicy: "cache-and-network",
    });

    return !loading ? {user: data.authorizedUser} : {loading: loading};
  };

export default useAuthorizedUser;