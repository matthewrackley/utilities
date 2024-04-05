import "../src/index.css";

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RouterProvider router={createBrowserRouter([{path: '*', element: children}])} />
);
