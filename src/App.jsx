import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Category from './pages/category/Category';
import Orders from './pages/orders/Orders';
import MyCategories from './pages/myCategories/MyCategories';
import Messages from './pages/messages/Messages';
import Add from './pages/add/Add';
import Message from './pages/message/Message';


function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/mycategories",
          element: <MyCategories />
        },
        {
          path: "/categories",
          element: <Categories />
        },
        {
          path: "/category",
          element: <Category />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
        
      ]
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

export default App
