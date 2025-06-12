import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RedirectAuth from './components/redirect-auth.tsx';
import HomePage from './pages/home.page.tsx';
import ProtectedRoutesApp from './components/protected-routes.tsx';
import AuthInitializer from './components/auth-initializer.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RedirectAuth />}></Route>
      <Route path='/login' element={<HomePage />}></Route>
      <Route path='/' element={<ProtectedRoutesApp />}>
        <Route path='app' element={<App />}></Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <AuthInitializer>
        <RouterProvider router={router} />
      </AuthInitializer>
    </StrictMode>
  </ChakraProvider>
)
