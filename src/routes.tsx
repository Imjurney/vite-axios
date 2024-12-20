import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer, { loader } from "./container/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    // react router dom 에서는 loader 함수를 직접 등록해야 합니다.
    loader,
  },
]);



const RouterComponent = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouterComponent;
