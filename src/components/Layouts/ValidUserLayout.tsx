import { useValidateUserTokenLazyQuery } from "@/domain/graphql";
import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

export const ValidUserLayout = () => {
  const userToken = Cookies.get(import.meta.env.VITE_APP_KEY_COOKIE_SESSION);
  const navigate = useNavigate();
  const [validateUserToken] = useValidateUserTokenLazyQuery({
    fetchPolicy: 'no-cache'
  })

  const { data, error } = useQuery({
    queryKey: ['validateUserToken', userToken],
    queryFn: async () => {
      const data = await validateUserToken({
        variables: {
          validateTokenInput: {
            token: userToken!
          }
        }
      });

      return data;
    },
    enabled: Boolean(userToken)
  });

  useEffect(() => {

    if(!userToken) navigate('/');
    
    // Validate when the query is done is data has information
    if (error) {
      navigate('/vcards');
    }

  }, [data, userToken])


  return (
    <Outlet />
  )
}
