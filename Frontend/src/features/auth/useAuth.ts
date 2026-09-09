import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUserRequest, loginRequest, logoutRequest, registerRequest } from "../../api/user";
import { useAppDispatch } from "../../app/hooks";
import { clearUser, setUser } from "./authSlice";

export const useCurrentUser = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: getCurrentUserRequest,
    retry: false,
  });

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: async () => {
      const data = await getCurrentUserRequest();
      console.log(data);
      // dispatch(setUser(r));
      queryClient.invalidateQueries({ queryKey: ["me"] });
    },
  });
};

export const useRegister = () => useMutation({ mutationFn: registerRequest });

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      dispatch(clearUser());
      queryClient.clear();
    },
  });
};
