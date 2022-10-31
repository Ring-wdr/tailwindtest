// import './App.css'

import { Nav } from "./components/Nav"
import {Routes, Route} from 'react-router-dom'
import { Main } from "./components/Main"
import { Gugudan } from "./components/Gugudan"
import { About } from "./components/About"

function App() {
  return (
    <div className="App">
      <Nav/>
        <Routes>
          <Route index element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/gugu" element={<Gugudan/>}/>
        </Routes>
    </div>
  )
}

export default App
