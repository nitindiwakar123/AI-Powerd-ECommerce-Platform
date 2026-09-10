import { useState } from "react";
import { MessageCircle, Send, X, Sparkles } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useAgentChat } from "../../features/agent/useAgent";

interface Msg {
  role: "user" | "assistant";
  text: string;
}

export function AgentWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const chat = useAgentChat();

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    try {
      const reply = await chat.mutateAsync(text);
      setMessages((m) => [...m, { role: "assistant", text: String(reply ?? "") }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", text: "Sorry, something went wrong." }]);
    }
  };

  return (
    <div className="fixed w-[350px] bottom-0 left-0 h-screen z-50">
      {open && (
        <div className="mb-3 flex w-full h-full w-80 flex-col overflow-hidden border border-zinc-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={16} className="text-accent-500" />
              Shopping Assistant
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setOpen(false)}>
              <X size={14} />
            </Button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {messages.length === 0 && (
              <p className="text-zinc-400">Ask me to find a product — e.g. "show me something under $30".</p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`w-fit max-w-[85%] rounded-lg px-3 py-2 ${
                  m.role === "user" ? "ml-auto bg-accent-500 text-white" : "bg-zinc-100 text-zinc-900"
                }`}
              >
                {m.text}
              </div>
            ))}
            {chat.isPending && <p className="text-xs text-zinc-400">Thinking…</p>}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t border-zinc-200 p-3">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask the assistant…" />
            <Button type="submit" size="icon">
              <Send size={16} />
            </Button>
          </form>
        </div>
      )}

      {!open && <Button size="icon" className="absolute bottom-5 left-5 h-12 w-12 rounded-full shadow-lg" onClick={() => setOpen((o) => !o)}>
        <MessageCircle size={20} />
      </Button>}
    </div>
  );
}
