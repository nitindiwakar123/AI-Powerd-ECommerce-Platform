import api from "./axios";

// POST /api/agent/chat  body: { message: string }
export const chatWithAgentRequest = async (message: string) => {
  const { data } = await api.post<{ success: boolean; message: string }>("/agent/chat", { message });
  return data.message;
};
