import context from './contexts/context'
import {RouterProvider} from 'react-router-dom'
import router from './router'
import { useState } from 'react'

function App() {
  const [title, useTitle] = useState('Dashboard')

  return (
    <context.Provider value={{title, useTitle}}>
      <RouterProvider router={router}></RouterProvider>
    </context.Provider>
  )
}

export default App
