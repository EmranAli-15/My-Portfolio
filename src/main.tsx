import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './app/routes.tsx'
import { RouterProvider } from 'react-router/dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto px-2'>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  </StrictMode>,
)
