import { rqClient } from "@/shared/api/instance";
import type { ApiSchemas } from "@/shared/api/schema";
import { ROUTES } from "@/shared/model/routes";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const registorMutation = rqClient.useMutation("post", "/auth/register", {
    onSuccess() {
      navigate(ROUTES.LOGIN);
    },
  });

  const register = (data: ApiSchemas["RegisterRequest"]) => {
    registorMutation.mutate({ body: data });
  };

  const errorMessage = registorMutation.isError
    ? registorMutation.error.message
    : undefined;

  return {
    register,
    isPending: registorMutation.isPending,
    errorMessage,
  };
}
