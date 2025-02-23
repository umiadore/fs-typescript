import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import "./components/consultation08/cocktail/cocktail.module.css"
import Layout from './layout/Layout';
import Lesson05 from './lessons/lesson05/Lesson05';
import NoPage from './components/noPage/NoPage';
import Homepage from './components/homePage/Homepage';
import Lesson06 from './lessons/lesson06/Lesson06';
import Lesson07 from './lessons/lesson07/Lesson07';
import Lesson08 from './lessons/lesson08/Lesson08';
import Lesson11 from './lessons/lesson11/Lesson11';
import Lesson04 from './lessons/lesson04/Lesson04';
import Lesson12 from './lessons/lesson12/Lesson12';
import GenderReveal from './components/genderReveal/GenderReveal';
import Lesson14 from './lessons/lesson14/Lesson14';
import Fetchfox from './components/fetchfox/Fetchfox';
import Lesson09 from './lessons/lesson09/Lesson09';
import Lesson10 from './lessons/lesson10/Lesson10';

function App() {

  return (
    // оборачиваем все приложение в особый компонент "HashRouter" из библиотеки 
    <HashRouter>
    <Routes>
<Route path='/' element={<Layout/>}>
<Route path='/' element={<Homepage/>}/>
<Route path='fellowship' element={<Lesson05/>}/>
<Route path='fetchfox' element={<Fetchfox/>}/>
<Route path='lesson-4' element={<Lesson04/>}/>
<Route path='lesson-5' element={<Lesson05/>}/>
<Route path='lesson-6' element={<Lesson06/>}/>
<Route path='lesson-7' element={<Lesson07/>}/>
<Route path='lesson-8' element={<Lesson08/>}/>
<Route path='lesson-9' element={<Lesson09/>}/>
<Route path='lesson-10' element={<Lesson10/>}/>
<Route path='lesson-11' element={<Lesson11/>}/>
<Route path='lesson-12' element={<Lesson12/>}/>
<Route path='genderreveal' element={<GenderReveal/>}/>
<Route path='lesson-14' element={<Lesson14/>}/>
<Route path='*' element={<NoPage/>}/>
</Route>
    </Routes>
    </HashRouter>
  )
}

export default App;
