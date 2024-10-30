import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

const HomeLayout = () => {

  return (
    <>
      <NavBar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default HomeLayout