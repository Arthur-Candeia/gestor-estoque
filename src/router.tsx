import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Stock from "./components/Stock/Stock";
import Item from "./components/Item/Item";
import Form from "./components/Form/Form";

const router = createBrowserRouter([
{
  path: '/',
  element: <Header></Header>,
  children: [
    {
      index: true,
      element: <Dashboard />
    },
    {
      path: '/stock',
      element: <Stock></Stock>
    },
    {
      path: '/stock/:productId',
      element: <Item></Item>
    },
    {
      path: '/stock/newItem',
      element: <Form></Form>
    },
    {
      path: '/stock/editItem/:id',
      element: <Form></Form>
    }
  ]
}
])

export default router;