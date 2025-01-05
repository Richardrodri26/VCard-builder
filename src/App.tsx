import { RouterProvider } from 'react-router-dom'
import './App.css'
import { appRouter } from './routes'
import { Providers } from './components/Providers'

function App() {

  return (
    <Providers>
      <RouterProvider router={appRouter} />
    </Providers>
  )
}

export default App
