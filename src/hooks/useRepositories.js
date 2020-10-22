import {GET_REPOSITORIES} from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const useRepositories = () => {
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
    });

    return !loading ? {repositories: data.repositories, loading: loading} : {loading: loading};
  };

export default useRepositories;