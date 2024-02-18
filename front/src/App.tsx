import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BasePage, MainPage } from './pages'
import settings from './services/settings'
console.log(`DEBUG: ${settings.DEBUG}`)

const router = createBrowserRouter([
  { path: '', element: <BasePage/>, children: [
    { path: '/', element: <MainPage/> },
  ]}
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
