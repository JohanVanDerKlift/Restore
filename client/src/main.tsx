import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router';
import { router } from "./app/layout/routes/Routes.tsx";
import {Provider} from "react-redux";
import {store} from "./app/store/store.ts";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <ToastContainer position='bottom-left' hideProgressBar theme='colored' />
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>
)
