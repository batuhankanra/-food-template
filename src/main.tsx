
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/route'
import { Provider } from 'react-redux'
import { store } from './stores'


createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <RouterProvider router={router}  />
  </Provider>
)
