import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

const HomeLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default HomeLayout