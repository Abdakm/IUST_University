import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//Pages
import App from './App.jsx'
import Page404 from './components/page404'

// React-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Redux
import { store, persistor } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter([
  {
   path: '/',
   element: <App />,
   errorElement: <Page404 /> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* here I can put the context varibels */}
        <PersistGate loading={'...Loading'} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
    </Provider>  
  </StrictMode>,
)
