import api from "./axios";
import type { AgentResponse } from "../types/agent";

// POST /api/agent/chat  body: { message: string }
export const chatWithAgentRequest = async (message: string) => {
  const response = await api.post<AgentResponse>("/agent/chat", { message });
  return response.data;
};
