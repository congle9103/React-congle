import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ProjectMovie/Header";
import LayoutMovie from "./ProjectMovie/LayoutMovie";
import Navbar from "./ProjectMovie/Navbar";
import Popular from "./ProjectMovie/Popular";
import ProjectMovie from "./ProjectMovie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutMovie />} />
          <Route path="ProjectMovie" element={<ProjectMovie />} />
          <Route path="Header" element={<Header />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="Popular" element={<Popular />} />
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
