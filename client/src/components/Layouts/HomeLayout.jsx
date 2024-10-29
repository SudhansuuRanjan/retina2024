import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Timer from "../HomeComponents/Timer"

const HomeLayout = () => {
  return (
    <main className="w-full">
      <NavBar />
      <Outlet />
      <Timer />
    </main>
  )
}

export default HomeLayout