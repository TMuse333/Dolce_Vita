
import './App.css'
import Homepage from './components/homepage/homepage'
import {Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}>
   
      </Route>

      <Route path='custom-properties' element={<Cus}

    </Routes>
    
    </>
  )
}

export default App
