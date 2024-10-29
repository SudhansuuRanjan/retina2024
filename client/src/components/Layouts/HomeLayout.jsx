import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

const HomeLayout = () => {

  return (
    <>
      <NavBar />
      <main className="w-full">
        <Outlet />
      </main>
    </>
  )
}

export default HomeLayout