import { Logo } from "./Logo"
import { Navigation } from "./Navigation"
import { Outlet } from "react-router-dom"

export const SharedLayout = () => {
    return (
        <div className="main-app">
           <header>
                <Logo />
                <Navigation />
            </header>
            <hr style={{ border: 'none', height: '2px', backgroundColor: 'cadetblue', width: '80%', margin: '20px auto' }}/ >
            <Outlet/>
        </div>
    )
}