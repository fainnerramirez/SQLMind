import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path='/' element={<RedirectAuth />}></Route>
//       <Route path='/login' element={<HomePage />}></Route>
//       <Route path='/' element={<ProtectedRoutesApp />}>
//         <Route path='app' element={<App />}></Route>
//       </Route>
//     </>
//   )
// );

createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      {/* <AuthInitializer>
        <RouterProvider router={router} />
      </AuthInitializer> */}
      <App />
    </StrictMode>
  </ChakraProvider>
)
