import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import AmanRoutes from './routes/AmanRoutes.jsx'
import AnimeshRoutes from "./routes/AnimeshRoutes";
import ChaitnyaRoutes from './routes/ChaitnyaRoutes'
import PranavRoutes from './routes/PranavRoutes'
import SomeshwarRoutes from './routes/SomeshwarRoutes'
import VarunRoutes from './routes/VarunRoutes'
import RootLayout from './pages/RootLayout'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        ...AmanRoutes,
        // ...AnimeshRoutes,
        // ...VarunRoutes,
        // ...PranavRoutes,
        // ...ChaitnyaRoutes,
        // ...SomeshwarRoutes
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
