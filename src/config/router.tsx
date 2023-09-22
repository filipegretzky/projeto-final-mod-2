import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Home from '@/pages/home'
import Contact from '@/pages/contact'
import { Spinner } from '@/components/ui'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/assets/styles/theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

export default function Router() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  )
}
