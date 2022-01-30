import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { User, UserData } from "./../graphql/models/User";
import { UserQuery } from "./../graphql/modules/user";

export default function useGithub(username: string) {
  const [data, setData] = useState<User | undefined>(undefined);

  const { data: apolloData, loading } = useQuery(UserQuery, {
    variables: {
      login: username,
    },
  });

  useEffect(() => {
    setData(apolloData?.user);
  }, [apolloData]);

  return {
    data,
    loading,
  };
}
