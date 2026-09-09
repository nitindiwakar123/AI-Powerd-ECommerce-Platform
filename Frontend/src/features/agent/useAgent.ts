import { useMutation } from "@tanstack/react-query";
import { chatWithAgentRequest } from "../../api/agent";

export const useAgentChat = () =>
  useMutation({
    mutationFn: (message: string) => chatWithAgentRequest(message),
  });
