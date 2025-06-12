import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/home.page.tsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ProtectedRoutesApp from './components/protected-routes.tsx';
import App from './App.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path='/login' element={<HomePage />}></Route>
      <Route path='/' element={<ProtectedRoutesApp />}>
        <Route path='app' element={<App />}></Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ChakraProvider>
)
