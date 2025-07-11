"use client";

import React from "react";
import ReactQueryProvider from "./react-query-provider";
import { ToasterProvider } from "./toaster-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <ToasterProvider />
      {children}
    </ReactQueryProvider>
  );
};
