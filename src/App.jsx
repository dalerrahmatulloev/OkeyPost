import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home, Layout, КакПокупать } from "./Routes/Routes";
import { Suspense } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          )
        },
        {
          path:"/Как покупать",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <КакПокупать />
            </Suspense>
          )
        }
      ]
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
