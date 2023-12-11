import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Categories from "./pages/categories/Categories";
import Category from "./pages/category/Category";
import Orders from "./pages/orders/Orders";
import MyProduct from "./pages/myProduct/MyProduct";
import Add from "./pages/add/Add";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/myproduct",
          element: <MyProduct />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/category",
          element: <Category />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
