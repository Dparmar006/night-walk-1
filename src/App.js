import { publicRoutes } from './routes/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(route => (
          <Route
            key={route.pathname}
            element={route.component}
            path={route.pathname}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
