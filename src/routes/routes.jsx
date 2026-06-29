import {Route,Routes } from "react-router-dom"
import Analytics from "../pages/analytics"
import Dashboard from "../pages/dashboard"

function Router(){



return(
    <Routes>
        <Route path="/Analytics" element={<Analytics/>}  />
        <Route path="/" element={<Dashboard/>}  />
    </Routes>



)
}
export default Router