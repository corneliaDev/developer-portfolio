import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./components/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  </StrictMode>
);
