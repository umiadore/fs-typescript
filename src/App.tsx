import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./components/consultation08/cocktail/cocktail.module.css"
import Layout from './layout/Layout';
import Lesson05 from './lessons/lesson05/Lesson05';
import NoPage from './components/noPage/NoPage';
function App() {

  return (
    // оборачиваем все приложение в особый компонент "HashRouter" из библиотеки 
    <HashRouter>
    <Routes>
<Route path='/' element={<Layout/>}>
<Route path='/' element={<h3>Homepage 🏠</h3>
}/>
<Route path='fellowship' element={<Lesson05/>}/>
<Route path='*' element={<NoPage/>}/>
</Route>
    </Routes>
    </HashRouter>
  )
}

export default App;
