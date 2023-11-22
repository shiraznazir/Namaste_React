import "./App.css"
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResturantMenu from "./src/components/ResturantMenu";
import useOnline from "./utils/useOnline";
const Groceries = lazy(() => import("./src/components/Groceries"));

const App = () => {
  const online = useOnline();
  if (online) {
    <h1>You are offline Please check your internet connection!!</h1>;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/groceries",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
