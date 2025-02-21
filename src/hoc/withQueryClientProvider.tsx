"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface WithQueryClientProviderProps {
  wrappedComponent: React.ReactNode;
}

const WithQueryClientProvider: React.FC<WithQueryClientProviderProps> = ({
  wrappedComponent,
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {wrappedComponent}
    </QueryClientProvider>
  );
};

export default WithQueryClientProvider;
