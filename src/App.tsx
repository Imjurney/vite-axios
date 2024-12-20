import styled from "styled-components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RouterComponent from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterComponent />
    </QueryClientProvider>
  );
}

export default App;
