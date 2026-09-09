import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { AgentWidget } from "./AgentWidget";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AgentWidget />
      <Toaster position="top-center" richColors />
    </div>
  );
}
