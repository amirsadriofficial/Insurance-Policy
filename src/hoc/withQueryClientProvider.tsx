"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { WithQueryClientProviderProps } from "./types";
import Fallback from "@/components/fallback";

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
      <Suspense fallback={<Fallback />}>{wrappedComponent}</Suspense>
    </QueryClientProvider>
  );
};

export default WithQueryClientProvider;
