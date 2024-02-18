import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BasePage, DetailsPage, MainPage } from './pages'
import settings from './services/settings'
console.log(`DEBUG: ${settings.DEBUG}`)

const router = createBrowserRouter([
  { path: '', element: <BasePage/>, children: [
    { path: '/', element: <MainPage/>, children: [
      // if intersection_id = null => create a new one 
      { path: '/intersection/:intersection_id/', element: <DetailsPage/> },
      { path: '/', element: <div>Select Intersection</div> },
    ]},
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
