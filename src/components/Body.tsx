import Login from "./Login";
import Browse from "./Browse";
import { createHashRouter, RouterProvider } from "react-router";
import Signup from "./Signup";

const Body = () => {
  const appRouter = createHashRouter([
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}  />
    </div>
  );
};

export default Body;
