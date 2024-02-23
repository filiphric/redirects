import {
  createBrowserRouter,
  RouterProvider,
  useNavigate
} from "react-router-dom";
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/a')}>Start</button>
    </>
  )
}

export default App
