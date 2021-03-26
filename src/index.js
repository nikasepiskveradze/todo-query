import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClientProvider } from "react-query";
import queryClient from "./utils/QueryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>,
  document.getElementById("root")
);
