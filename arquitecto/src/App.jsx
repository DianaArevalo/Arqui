import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
// components
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
//Second Pages
import Architectural from './pages/SecondPages/Architectural'
import Urban from './pages/SecondPages/Urban'
import { HdrPhotos } from './pages/SecondPages/HdrPhotos'





function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* Rutas principales */}
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />

        {/*Rutas Sewcundarias*/}
        <Route path='/architectural' element={<Architectural />} />
        <Route path='/urban' element={<Urban />} />

        <Route path='/hdr' element={< HdrPhotos />} />
      </Route>

    )
  )


  return (
    <div className='bg-gray-default dark:bg-corbeau-default '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
const Root = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>

    </>
  )
}
