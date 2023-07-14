import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Stock from "./components/Stock/Stock";
import Item from "./components/Item/Item";
import Form from "./components/Form/Form";

import loaderAllItems from "./loaders/loaderAllItems";

const router = createBrowserRouter([
{
  path: '/',
  element: <Header></Header>,
  children: [
    {
      index: true,
      element: <Dashboard />,
      loader: loaderAllItems,
      errorElement: <h2>Algo deu errado</h2>
    },
    {
      path: '/stock',
      element: <Stock></Stock>,
      loader: loaderAllItems,
      errorElement: <h2>Algo deu errado</h2>
    },
    {
      path: '/stock/:productId',
      element: <Item></Item>,
      loader: loaderAllItems,
      errorElement: <h2>Algo deu errado</h2>
    },
    {
      path: '/stock/newItem',
      element: <Form></Form>
    },
    {
      path: '/stock/editItem/:productId/',
      element: <Form></Form>,
      loader: loaderAllItems,
      errorElement: <h2>Algo deu errado</h2>
    }
  ]
}
])

export default router;