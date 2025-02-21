"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { WithQueryClientProviderProps } from "./types";

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
      {/* TODO: Design and implement a proper fallback page */}
      <Suspense
        fallback={<div className="text-center">لطفا منتظر بمانید...</div>}
      >
        {wrappedComponent}
      </Suspense>
    </QueryClientProvider>
  );
};

export default WithQueryClientProvider;
