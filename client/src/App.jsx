import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import AmanRoutes from './routes/AmanRoutes.jsx'
import AnimeshRoutes from "./routes/AnimeshRoutes.jsx";
import ChaitnyaRoutes from './routes/ChaitnyaRoutes.jsx'
import PranavRoutes from './routes/PranavRoutes.jsx'
import SomeshwarRoutes from './routes/SomeshwarRoutes.jsx'
import VarunRoutes from './routes/VarunRoutes.jsx'
import RootLayout from './pages/RootLayout.jsx'

import { AuthProvider } from './AuthContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        ...AmanRoutes,
        ...AnimeshRoutes,
        ...VarunRoutes,
        ...PranavRoutes,
        ...ChaitnyaRoutes,
        ...SomeshwarRoutes
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App
