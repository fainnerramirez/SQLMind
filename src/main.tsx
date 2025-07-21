import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import AuthInitializer from './components/auth-initializer.tsx';
import Layout from './components/layout.tsx';
import ProtectedRoutesApp from './components/protected-routes.tsx';
import RedirectAuth from './components/redirect-auth.tsx';
import HomePage from './pages/home.page.tsx';

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
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </AuthInitializer>
    </StrictMode>
  </ChakraProvider>
)
