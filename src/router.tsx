import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Stock from "./components/Stock/Stock";

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
    /*{
      path: '/stock/:productId',
      element: <Product></Product>
    },
    {
      path: '/stock/newItem',
      element: <NewItem></NewItem>
    },
    {
      path: '/stock/editItem',
      element: <EditItem></EditItem>
    }
    */
  ]
}
])

export default router;