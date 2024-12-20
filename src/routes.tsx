import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./container/MainContainer";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
  },
]);

const getProducts = async () => {
  return (await axios.get("https://fakestoreapi.com/products")).data;
};

const RouterComponent = () => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
  });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouterComponent;
