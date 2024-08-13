import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import { QueryClient,QueryClientProvider } from 'react-query'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Page from './pages/teacher/Page'
import { ToastContainer} from 'react-toastify'


// const router = createBrowserRouter([
// {
//   path:'/app',
//   element:<Page/>

// }])
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>

{/* <RouterProvider router={router}/> */}
<Page/>
    <ToastContainer/>

 
  </QueryClientProvider>,
)



